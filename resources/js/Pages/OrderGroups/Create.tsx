import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Dish, OrderGroupDeliveryType, OrderGroupPaymentMethod, OrderItem, PageProps, Variant } from "@/types";
import { Head, Link, useForm } from '@inertiajs/react';
import { Navbar } from 'flowbite-react';
import { ReactElement, useEffect, useState } from "react";
import CreateOrderItemsForm from './Partials/CreateOrderItemsForm';
import SaveCustomerInformationForm from './Partials/SaveCustomerInformationForm';

function Create({
    dishes
}: PageProps<{ dishes: Dish[] }>) {
    const [selectedDish, setSelectedDish] = useState<Dish|null>(null)
    const [total, setTotal] = useState(0)
    const [currentForm, setCurrentForm] = useState<
        "CreateOrderItemsForm"|"SaveCustomerInformationForm"
    >("CreateOrderItemsForm")
    const {
        data,
        setData,
        post,
        processing,
        errors
    } = useForm<{
        apply_invoice: boolean,
        delivery_type: OrderGroupDeliveryType,
        payment_method: OrderGroupPaymentMethod,
        order_items: OrderItem[],
        client: string,
    }>({
        apply_invoice: false,
        delivery_type: "restaurant",
        payment_method: "cash",
        order_items: [],
        client: ""
    });
    
    useEffect(() => {
        calculateTotal()
    }, [data.order_items])

    const addOrderItem = (variant: Variant, quantity: number) => {
        const orderItem: OrderItem = {
            id: 0,
            quantity,
            subtotal: 0,
            variant_id: variant.id,
            variant
        }

        const index = data.order_items.findIndex(o => o.variant_id == orderItem.variant_id)

        if (index != -1) {
            editOrderItem(index, quantity)
            return
        }

        setData(prevData => ({
            ...prevData,
            order_items: [...prevData.order_items, orderItem]
        }))
    }

    const editOrderItem = (index: number, newQuantity: number) => {
        if (newQuantity == 0) {
            deleteOrderItem(index)
            return
        }

        setData(prevData => {
            if (index < 0 || index >= prevData.order_items.length) {
                return prevData
            }
    
            const updatedOrderItems = [...prevData.order_items]
    
            updatedOrderItems[index] = {
                ...updatedOrderItems[index],
                quantity: newQuantity
            }
    
            return {
                ...prevData,
                order_items: updatedOrderItems
            }
        })
    }

    const deleteOrderItem = (index: number) => {
        setData(prevData => {
            if (index < 0 || index >= prevData.order_items.length) {
                return prevData
            }
    
            const updatedOrderItems = [...prevData.order_items]
            updatedOrderItems.splice(index, 1)
    
            return {
                ...prevData,
                order_items: updatedOrderItems
            }
        })
    }

    const calculateTotal = () => {
        let total = 0
    
        data.order_items.forEach(orderItem => {
            total += orderItem.variant.price * orderItem.quantity
        })
    
        setTotal(total)
    }

    const submitStoreOrderGroup = () => {
        post(route("order-groups.store"))
    }

    return (
        <>
            <Head title="Ordenes" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="flex flex-col p-6 text-gray-900 dark:text-gray-100">
                            <Navbar fluid rounded>
                                <Navbar.Toggle />
                                <Navbar.Collapse>
                                    <Navbar.Link as={Link} href={route("order-groups.create")} active>
                                        Crear pedido
                                    </Navbar.Link>
                                    <Navbar.Link as={Link} href={route("order-groups.index")}>
                                        Administrar pedidos
                                    </Navbar.Link>
                                </Navbar.Collapse>
                            </Navbar>

                            <br />

                            {currentForm == "CreateOrderItemsForm" ? (
                                <CreateOrderItemsForm
                                    dishes={dishes}
                                    orderItems={data.order_items}
                                    selectedDish={selectedDish}
                                    total={total}
                                    addOrderItem={addOrderItem}
                                    setSelectedDish={setSelectedDish}
                                    changeToAnotherForm={() => {
                                        if (data.order_items.length > 0) {
                                            setCurrentForm("SaveCustomerInformationForm")
                                        }
                                    }}
                                />
                            ) : (
                                <SaveCustomerInformationForm
                                    orderItems={data.order_items}
                                    total={total}
                                    submitStoreOrderGroup={submitStoreOrderGroup}
                                    data={data}
                                    setData={setData}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Create.layout = (page: ReactElement<PageProps>) => (
    <AuthenticatedLayout user={page.props.auth.user} children={page} />
);

export default Create;