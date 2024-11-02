import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Dish, OrderItem, PageProps, Variant } from "@/types";
import { Head, Link } from '@inertiajs/react';
import { Navbar } from 'flowbite-react';
import { ReactElement, useEffect, useState } from "react";
import CreateOrderItemsForm from './Partials/CreateOrderItemsForm';
import SaveCustomerInformationForm from './Partials/SaveCustomerInformationForm';

function Create({
    dishes
}: PageProps<{ dishes: Dish[] }>) {
    const [selectedDish, setSelectedDish] = useState<Dish|null>(null)
    const [orderItems, setOrderItems] = useState<OrderItem[]>([])
    const [total, setTotal] = useState(0)

    const [currentForm, setCurrentForm] = useState<
        "CreateOrderItemsForm"|"SaveCustomerInformationForm"
    >("CreateOrderItemsForm")
    
    useEffect(() => {
        calculateTotal()
    }, [orderItems])

    const addOrderItem = (variant: Variant, quantity: number) => {
        const orderItem: OrderItem = {
            quantity,
            subtotal: 0,
            variant_id: variant.id,
            variant
        }

        const index = orderItems.findIndex(o => o.variant_id == orderItem.variant_id)

        if (index != -1) {
            editOrderItem(index, quantity)
            return
        }

        setOrderItems(prevOrderItems => {
            return [...prevOrderItems, orderItem]
        });
    }

    const editOrderItem = (index: number, newQuantity: number) => {
        if (newQuantity == 0) {
            deleteOrderItem(index)
            return
        }

        setOrderItems(prevOrderItems => {
            if (index < 0 || index >= prevOrderItems.length) {
                return prevOrderItems
            }
    
            const updatedOrderItems = [...prevOrderItems]
    
            updatedOrderItems[index] = {
                ...updatedOrderItems[index],
                quantity: newQuantity
            }
    
            return updatedOrderItems
        })
    }

    const deleteOrderItem = (index: number) => {
        setOrderItems(prevOrderItems => {
            if (index < 0 || index >= prevOrderItems.length) {
                return prevOrderItems
            }
    
            const updatedOrderItems = [...prevOrderItems]
            updatedOrderItems.splice(index, 1)
    
            return updatedOrderItems
        })
    }

    const calculateTotal = () => {
        let total = 0
    
        orderItems.forEach(orderItem => {
            total += orderItem.variant.price * orderItem.quantity
        })
    
        setTotal(total)
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
                                    <Navbar.Link as={Link} href="#" active>
                                        Crear pedido
                                    </Navbar.Link>
                                    <Navbar.Link as={Link} href="#">
                                        Administrar pedidos
                                    </Navbar.Link>
                                </Navbar.Collapse>
                            </Navbar>

                            <br />

                            {currentForm == "CreateOrderItemsForm" ? (
                                <CreateOrderItemsForm
                                    dishes={dishes}
                                    orderItems={orderItems}
                                    selectedDish={selectedDish}
                                    total={total}
                                    addOrderItem={addOrderItem}
                                    setSelectedDish={setSelectedDish}
                                    changeToAnotherForm={() => {
                                        if (orderItems.length > 0) {
                                            setCurrentForm("SaveCustomerInformationForm")
                                        }
                                    }}
                                />
                            ) : (
                                <SaveCustomerInformationForm
                                    orderItems={orderItems}
                                    total={total}
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