import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InventoryGroup, PageProps } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Button, Table } from 'flowbite-react';
import { ReactElement } from 'react';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import KitchenInventoryGroupShow from './Partials/KitchenInventoryGroupShow';
import PizzaInventoryGroupShow from './Partials/PizzaInventoryGroupShow';

function Show({
    inventoryGroup
}: PageProps<{
    inventoryGroup: InventoryGroup
}>) {
    return (
        <>
            <Head title="Inventario" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="flex items-center gap-5">
                                <Button
                                    size="xs"
                                    outline
                                    color="info"
                                    onClick={() => {
                                        router.visit(
                                            route('inventory-groups.index'),
                                        );
                                    }}
                                >
                                    <IoReturnUpBackOutline className="w-6 h-6" />
                                </Button>
                                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                    {inventoryGroup.type == 'kitchen'
                                        ? 'Ventas de cocina'
                                        : 'Ventas de pizzas'}
                                </h5>
                            </div>

                            <br />

                            {inventoryGroup.type == 'kitchen' ? (
                                <KitchenInventoryGroupShow inventoryGroup={inventoryGroup} />
                            ) : (
                                <PizzaInventoryGroupShow inventoryGroup={inventoryGroup} />
                            )}
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
