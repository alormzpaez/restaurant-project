import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import OrderItemCard from '@/Components/OrderGroups/OrderItemCard';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { OrderGroup, PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button, Card, Label, Navbar, Radio } from 'flowbite-react';
import { ReactElement } from 'react';

function Show({ orderGroup }: PageProps<{ orderGroup: OrderGroup }>) {
    return (
        <>
            <Head title="Pedido" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="flex flex-col p-6 text-gray-900 dark:text-gray-100">
                            <Navbar fluid rounded>
                                <Navbar.Toggle />
                                <Navbar.Collapse>
                                    <Navbar.Link
                                        as={Link}
                                        href={route('order-groups.create')}
                                    >
                                        Crear pedido
                                    </Navbar.Link>
                                    <Navbar.Link
                                        as={Link}
                                        href={route('order-groups.index')}
                                        active
                                    >
                                        Administrar pedidos
                                    </Navbar.Link>
                                </Navbar.Collapse>
                            </Navbar>

                            <br />

                            <section className="grid grid-cols-3 gap-5">
                                <div className="flex flex-col justify-start col-span-2 gap-5 p-3 border">
                                    <Card>
                                        <fieldset className="flex w-full gap-4">
                                            <legend className="mb-4">
                                                Tipo de pedido
                                            </legend>
                                            <div className="flex justify-center w-full gap-5">
                                                <div className="flex items-center gap-2">
                                                    <Radio
                                                        id="residence"
                                                        name="delivery_type"
                                                        value="residence"
                                                        checked={
                                                            orderGroup.delivery_type ==
                                                            'residence'
                                                        }
                                                        // onChange={(e) => {
                                                        //     if (e.target.checked) {
                                                        //         setData({
                                                        //             ...data,
                                                        //             delivery_type: "residence"
                                                        //         })
                                                        //     }
                                                        // }}
                                                    />
                                                    <Label htmlFor="residence">
                                                        Domicilio
                                                    </Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Radio
                                                        id="restaurant"
                                                        name="delivery_type"
                                                        value="restaurant"
                                                        checked={
                                                            orderGroup.delivery_type ==
                                                            'restaurant'
                                                        }
                                                        // onChange={(e) => {
                                                        //     if (e.target.checked) {
                                                        //         setData({
                                                        //             ...data,
                                                        //             delivery_type: "restaurant"
                                                        //         })
                                                        //     }
                                                        // }}
                                                    />
                                                    <Label htmlFor="restaurant">
                                                        Restaurante
                                                    </Label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </Card>

                                    <Card>
                                        <span>Datos del cliente</span>

                                        <div>
                                            <InputLabel
                                                htmlFor="client2"
                                                value="Nombre"
                                            />

                                            <TextInput
                                                id="client2"
                                                type="text"
                                                className="block w-full mt-1"
                                                value={orderGroup.invoice.client}
                                                // onChange={(e) => {
                                                //     setData({
                                                //         ...data,
                                                //         client: e.target.value
                                                //     })
                                                // }}
                                                required
                                                autoComplete="client"
                                            />
                                        </div>
                                    </Card>

                                    <Card>
                                        <div className="flex justify-evenly">
                                            <div className="flex items-center gap-2">
                                                <Checkbox
                                                    id="apply_invoice"
                                                    checked={
                                                        orderGroup.apply_invoice
                                                    }
                                                    // onChange={(e) =>
                                                    //     setData({
                                                    //         ...data,
                                                    //         apply_invoice: e.target.checked
                                                    //     })
                                                    // }
                                                />
                                                <Label htmlFor="apply_invoice">
                                                    Solicita factura
                                                </Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="apply_customer_saving" />
                                                <Label htmlFor="apply_customer_saving">
                                                    Guardar cliente
                                                </Label>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div className="flex flex-col justify-start col-span-1 gap-5 p-3 border">
                                    {orderGroup.orderItems.map(
                                        (orderItem, index) => (
                                            <OrderItemCard
                                                orderItem={orderItem}
                                                key={index}
                                            />
                                        ),
                                    )}

                                    <div className="space-y-4 border-b-4">
                                        <dl className="flex items-center justify-between gap-4 dark:border-gray-700">
                                            <dt className="text-base font-bold text-gray-900 dark:text-white">
                                                Total
                                            </dt>
                                            <dd className="text-base font-bold text-gray-900 dark:text-white">
                                                ${orderGroup.total.toFixed(2)}
                                            </dd>
                                        </dl>
                                    </div>

                                    <Button
                                        className="self-center w-1/2"
                                        // onClick={submitStoreOrderGroup}
                                    >
                                        Finalizar pedido
                                    </Button>
                                    <Button
                                        className="self-center w-1/2"
                                        outline
                                        // onClick={submitStoreOrderGroup}
                                    >
                                        Cancelar pedido
                                    </Button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Show.layout = (page: ReactElement<PageProps>) => (
    <AuthenticatedLayout user={page.props.auth.user} children={page} />
);

export default Show;
