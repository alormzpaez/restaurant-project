import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import OrderItemCard from '@/Components/OrderGroups/OrderItemCard';
import TextInput from '@/Components/TextInput';
import { OrderGroupDeliveryType, OrderGroupPaymentMethod, OrderItem } from '@/types';
import { Button, Card, Label, Radio, Textarea } from 'flowbite-react';

export default function SaveCustomerInformationForm({
    orderItems,
    total,
    submitStoreOrderGroup,
    data,
    setData
}: {
    orderItems: OrderItem[];
    total: number;
    submitStoreOrderGroup: () => void,
    data: {
        apply_invoice: boolean,
        delivery_type: OrderGroupDeliveryType,
        payment_method: OrderGroupPaymentMethod,
        order_items: OrderItem[],
        client: string
    },
    setData: (data: {
        apply_invoice: boolean,
        delivery_type: OrderGroupDeliveryType,
        payment_method: OrderGroupPaymentMethod,
        order_items: OrderItem[],
        client: string
    }) => void
}) {
    return (
        <section className="grid grid-cols-3 gap-5">
            <div className="flex flex-col justify-start col-span-2 gap-5 p-3 border">
                <Card>
                    <fieldset className="flex w-full gap-4">
                        <legend className="mb-4">Tipo de pedido</legend>
                        <div className="flex justify-center w-full gap-5">
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="residence"
                                    name="delivery_type"
                                    value="residence"
                                    checked={
                                        data.delivery_type == "residence"
                                    }
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setData({
                                                ...data,
                                                delivery_type: "residence"
                                            })
                                        }
                                    }}
                                />
                                <Label htmlFor="residence">Domicilio</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="restaurant"
                                    name="delivery_type"
                                    value="restaurant"
                                    checked={
                                        data.delivery_type == "restaurant"
                                    }
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setData({
                                                ...data,
                                                delivery_type: "restaurant"
                                            })
                                        }
                                    }}
                                />
                                <Label htmlFor="restaurant">Restaurante</Label>
                            </div>
                        </div>
                    </fieldset>
                </Card>

                {data.delivery_type == 'residence' ? (
                    <Card>
                        <span>Datos del cliente</span>

                        <div>
                            <InputLabel htmlFor="client" value="Nombre" />

                            <TextInput
                                id="client"
                                className="block w-full mt-1"
                                value={data.client}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        client: e.target.value
                                    })
                                }}
                                required
                                autoComplete="client"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="address" value="Dirección" />

                            <TextInput
                                id="address"
                                className="block w-full mt-1"
                                // value={''}
                                // onChange={(e) => setData('name', e.target.value)}
                                required
                                autoComplete="address"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="references"
                                value="Referencias"
                            />

                            <Textarea
                                id="references"
                                placeholder="Escribe algo..."
                                required
                                rows={4}
                                // value={''}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="indications"
                                value="Indicaciones"
                            />

                            <Textarea
                                id="indications"
                                placeholder="Escribe algo..."
                                required
                                rows={4}
                                // value={''}
                            />
                        </div>
                    </Card>
                ) : (
                    <Card>
                        <span>Datos del cliente</span>

                        <div>
                            <InputLabel htmlFor="client2" value="Nombre" />

                            <TextInput
                                id="client2"
                                type='text'
                                className="block w-full mt-1"
                                value={data.client}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        client: e.target.value
                                    })
                                }}
                                required
                                autoComplete="client"
                            />
                        </div>
                    </Card>
                )}
                
                <Card>
                    <div className="flex justify-evenly">
                        <div className="flex items-center gap-2">
                            <Checkbox 
                                id="apply_invoice" 
                                checked={data.apply_invoice}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        apply_invoice: e.target.checked
                                    })
                                }
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
                <Card>
                    <fieldset className="flex w-full gap-4">
                        <legend className="mb-4">Método de pago</legend>
                        <div className="flex justify-center w-full gap-5">
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="cash"
                                    name="payment_method"
                                    value="cash"
                                    checked={
                                        data.payment_method == "cash"
                                    }
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setData({
                                                ...data,
                                                payment_method: "cash"
                                            })
                                        }
                                    }}
                                />
                                <Label htmlFor="cash">Efectivo</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="card"
                                    name="payment_method"
                                    value="card"
                                    checked={
                                        data.payment_method == "card"
                                    }
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setData({
                                                ...data,
                                                payment_method: "card"
                                            })
                                        }
                                    }}
                                />
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

                <Button
                    className="self-center w-1/2"
                    onClick={submitStoreOrderGroup}
                >
                    Registrar pedido
                </Button>
            </div>
        </section>
    );
}
