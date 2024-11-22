import { InventoryGroup } from '@/types';
import { router, useForm } from '@inertiajs/react';
import { Button, Table } from 'flowbite-react';
import { FaEdit } from 'react-icons/fa';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

export default function PizzaInventoryGroupsTable({
    inventoryGroups,
    returnBack,
}: {
    inventoryGroups: InventoryGroup[];
    returnBack: () => void;
}) {
    const {
        delete: destroy,
        errors,
        processing,
    } = useForm();

    const submitDestroy = (inventoryGroupId: number) => {
        destroy(route("inventory-groups.destroy", inventoryGroupId), {
            preserveScroll: true
        });
    };

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex items-center gap-5">
                <Button size="xs" outline color="info" onClick={returnBack}>
                    <IoReturnUpBackOutline className="w-6 h-6" />
                </Button>
                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                    Venta de pizzas
                </h5>
            </div>

            <br />

            <Table>
                <Table.Head>
                    <Table.HeadCell>Fecha</Table.HeadCell>
                    <Table.HeadCell>Pizzas grandes</Table.HeadCell>
                    <Table.HeadCell>Pizzas chicas</Table.HeadCell>
                    <Table.HeadCell>Detalles</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {inventoryGroups.map((inventoryGroup) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {inventoryGroup.date}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.big_pizza_sold_quantity}{' '}
                                vendidas
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.small_pizza_sold_quantity}{' '}
                                vendidos
                            </Table.Cell>
                            <Table.Cell className="flex gap-2">
                                <Button
                                    size="sm"
                                    onClick={() => {
                                        router.visit(
                                            route(
                                                'inventory-groups.show',
                                                inventoryGroup.id,
                                            ),
                                        );
                                    }}
                                >
                                    Ver
                                </Button>
                                <Button size="xs" outline color="red" onClick={() => {
                                    let answer = confirm('¿Estás seguro de eliminar?')

                                    if (answer) {
                                        submitDestroy(inventoryGroup.id)
                                    }
                                }}>
                                    <MdDelete className="w-6 h-6" />
                                </Button>
                                <Button size="xs" outline color="yellow" onClick={() => {
                                    router.visit(
                                        route(
                                            'inventory-groups.edit',
                                            inventoryGroup.id,
                                        ),
                                    );
                                }}>
                                    <FaEdit className="w-6 h-6" />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <br />

            <Button onClick={() => {
                router.visit(
                    route(
                        'inventory-groups.create', {
                            query: {
                                type: "pizza"
                            }
                        }
                    ),
                );
            }}>Agregar</Button>
        </div>
    );
}
