import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { InventoryGroup } from '@/types';
import { useForm } from '@inertiajs/react';
import { Button, Table } from 'flowbite-react';
import { FormEventHandler, useEffect } from 'react';

export default function PizzaInventoryGroupEdit({
    inventoryGroup,
}: {
    inventoryGroup: InventoryGroup;
}) {
    const { data, setData, put, processing, errors } = useForm<{
        big_pizza_remaining_quantity?: number;
        small_pizza_remaining_quantity?: number;
        big_pizza_made_quantity?: number;
        small_pizza_made_quantity?: number;
        big_pizza_useful_quantity?: number;
        small_pizza_useful_quantity?: number;
        big_pizza_sold_quantity?: number;
        small_pizza_sold_quantity?: number;
    }>({
        big_pizza_remaining_quantity:
            inventoryGroup.big_pizza_remaining_quantity ?? 0,
        small_pizza_remaining_quantity:
            inventoryGroup.small_pizza_remaining_quantity ?? 0,
        big_pizza_made_quantity: inventoryGroup.big_pizza_made_quantity ?? 0,
        small_pizza_made_quantity: inventoryGroup.small_pizza_made_quantity ?? 0,
        big_pizza_useful_quantity: inventoryGroup.big_pizza_useful_quantity ?? 0,
        small_pizza_useful_quantity: inventoryGroup.small_pizza_useful_quantity ?? 0,
        big_pizza_sold_quantity: inventoryGroup.big_pizza_sold_quantity ?? 0,
        small_pizza_sold_quantity: inventoryGroup.small_pizza_sold_quantity ?? 0,
    });

    const submit = () => {
        // console.log("Data: ", data)
        put(route('inventory-groups.update', inventoryGroup.id), {
            // onFinish: () => reset('password'),
        });
    };

    useEffect(() => {}, []);

    return (
        <div>
            <h5 className="block w-64 p-4 tracking-tight text-gray-900 bg-yellow-400 rounded-lg rounded-bl-none rounded-br-none dark:text-white">
                {inventoryGroup.date}
            </h5>
            <div className="p-4">
                <span>Resumen del día</span>
            </div>
            <Table>
                <Table.Head>
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>Pizzas grandes</Table.HeadCell>
                    <Table.HeadCell>Pizzas chicas</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Quedaron
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.big_pizza_remaining_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'big_pizza_remaining_quantity',
                                        parseInt(e.target.value),
                                    )
                                }
                                }
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.small_pizza_remaining_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) =>
                                    setData(
                                        'small_pizza_remaining_quantity',
                                        parseInt(e.target.value),
                                    )
                                }
                            />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Se hicieron
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.big_pizza_made_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) =>
                                    setData(
                                        'big_pizza_made_quantity',
                                        parseInt(e.target.value),
                                    )
                                }
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.small_pizza_made_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) =>
                                    setData(
                                        'small_pizza_made_quantity',
                                        parseInt(e.target.value),
                                    )
                                }
                            />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Total para usar
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.big_pizza_useful_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) =>
                                    setData(
                                        'big_pizza_useful_quantity',
                                        parseInt(e.target.value),
                                    )
                                }
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.small_pizza_useful_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) =>
                                    setData(
                                        'small_pizza_useful_quantity',
                                        parseInt(e.target.value),
                                    )
                                }
                            />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Vendidas
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.big_pizza_sold_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) =>
                                    setData(
                                        'big_pizza_sold_quantity',
                                        parseInt(e.target.value),
                                    )
                                }
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.small_pizza_sold_quantity}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'small_pizza_sold_quantity',
                                        parseInt(e.target.value),
                                    )
                                }
                                }
                            />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <br />
            <Button onClick={submit}>Guardar</Button>
        </div>
    );
}
