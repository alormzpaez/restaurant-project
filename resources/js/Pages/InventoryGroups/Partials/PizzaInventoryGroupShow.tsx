import { InventoryGroup } from '@/types';
import { Table } from 'flowbite-react';

export default function PizzaInventoryGroupShow({
    inventoryGroup
}: {
    inventoryGroup: InventoryGroup
}) {
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
                        <Table.Cell>{inventoryGroup.big_pizza_remaining_quantity ?? 'N/A'}</Table.Cell>
                        <Table.Cell>{inventoryGroup.small_pizza_remaining_quantity ?? 'N/A'}</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Se hicieron
                        </Table.Cell>
                        <Table.Cell>{inventoryGroup.big_pizza_made_quantity ?? 'N/A'}</Table.Cell>
                        <Table.Cell>{inventoryGroup.small_pizza_made_quantity ?? 'N/A'}</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Total para usar
                        </Table.Cell>
                        <Table.Cell>{inventoryGroup.big_pizza_useful_quantity ?? 'N/A'}</Table.Cell>
                        <Table.Cell>{inventoryGroup.small_pizza_useful_quantity ?? 'N/A'}</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Vendidas
                        </Table.Cell>
                        <Table.Cell>{inventoryGroup.big_pizza_sold_quantity ?? 'N/A'}</Table.Cell>
                        <Table.Cell>{inventoryGroup.small_pizza_sold_quantity ?? 'N/A'}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}
