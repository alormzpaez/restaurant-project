import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import OrderItemCard from '@/Components/OrderGroups/OrderItemCard';
import TextInput from '@/Components/TextInput';
import { OrderItem } from '@/types';
import { Button, Card, Label, Radio, Textarea } from 'flowbite-react';

export default function SaveCustomerInformationForm({
    orderItems,
    total,
}: {
    orderItems: OrderItem[];
    total: number;
}) {
    return (
        <section className="grid grid-cols-3 gap-5">
            <div className="flex flex-col justify-start col-span-2 gap-5 p-3 border">
                <Card>
                    <fieldset className="flex w-full gap-4">
                        <legend className="mb-4">Tipo de pedido</legend>
                        <div className="flex justify-center w-full gap-5">
                            <div className="flex items-center gap-2">
                                <Radio id="residence" name="delivery_type" value="residence" defaultChecked />
                                <Label htmlFor="residence">Domicilio</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio id="restaurant" name="delivery_type" value="restaurant" />
                                <Label htmlFor="restaurant">Restaurante</Label>
                            </div>
                        </div>
                    </fieldset>
                </Card>
                <Card>
                    <span>Datos del cliente</span>
                    
                    <div>
                        <InputLabel htmlFor="name" value="Nombre" />

                        <TextInput
                            id="name"
                            className="block w-full mt-1"
                            value={""}
                            // onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="address" value="Dirección" />

                        <TextInput
                            id="address"
                            className="block w-full mt-1"
                            value={""}
                            // onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete="address"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="references" value="Referencias" />

                        <Textarea
                            id="references"
                            placeholder="Escribe algo..."
                            required
                            rows={4}
                            value={""}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="indications" value="Indicaciones" />

                        <Textarea
                            id="indications"
                            placeholder="Escribe algo..."
                            required
                            rows={4}
                            value={""}
                        />
                    </div>
                </Card>
                <Card>
                    <span>Datos del cliente</span>
                    
                    <div>
                        <InputLabel htmlFor="name" value="Nombre" />

                        <TextInput
                            id="name"
                            className="block w-full mt-1"
                            value={""}
                            // onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                    </div>
                </Card>
                <Card>
                    <div className="flex justify-evenly">
                        <div className="flex items-center gap-2">
                            <Checkbox id="apply_invoice" />
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
                <Card>
                    <fieldset className="flex w-full gap-4">
                        <legend className="mb-4">Método de pago</legend>
                        <div className="flex justify-center w-full gap-5">
                            <div className="flex items-center gap-2">
                                <Radio id="cash" name="payment_method" value="cash" defaultChecked />
                                <Label htmlFor="cash">Efectivo</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio id="card" name="payment_method" value="card" />
                                <Label htmlFor="card">Tarjeta</Label>
                            </div>
                        </div>
                    </fieldset>
                </Card>
            </div>
            <div className="flex flex-col justify-start col-span-1 gap-5 p-3 border">
                {orderItems.map((orderItem, index) => (
                    <OrderItemCard orderItem={orderItem} key={index} />
                ))}

                <div className="space-y-4 border-b-4">
                    <dl className="flex items-center justify-between gap-4 dark:border-gray-700">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">
                            Total
                        </dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">
                            ${total.toFixed(2)}
                        </dd>
                    </dl>
                </div>

                <Button className="self-center w-1/2">Registrar pedido</Button>
            </div>
        </section>
    );
}
