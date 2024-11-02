import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InventoryGroup, PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { Card } from 'flowbite-react';
import { ReactElement, useState } from 'react';
import KitchenInventoryGroupsTable from './Partials/KitchenInventoryGroupsTable';
import PizzaInventoryGroupsTable from './Partials/PizzaInventoryGroupsTable';

function Index({
    kitchenInventoryGroups,
    pizzaInventoryGroups,
}: PageProps<{
    kitchenInventoryGroups: InventoryGroup[];
    pizzaInventoryGroups: InventoryGroup[];
}>) {
    const [selectedList, setSelectedList] = useState<
        'KitchenInventoryGroups' | 'PizzaInventoryGroups' | null
    >(null);

    return (
        <>
            <Head title="Inventarios" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="flex justify-center gap-10 p-6 text-gray-900 dark:text-gray-100">
                            {selectedList == 'KitchenInventoryGroups' ? (
                                <KitchenInventoryGroupsTable
                                    inventoryGroups={kitchenInventoryGroups}
                                    returnBack={() => {
                                        setSelectedList(null);
                                    }}
                                />
                            ) : selectedList == 'PizzaInventoryGroups' ? (
                                <PizzaInventoryGroupsTable
                                    inventoryGroups={pizzaInventoryGroups}
                                    returnBack={() => {
                                        setSelectedList(null);
                                    }}
                                />
                            ) : (
                                <>
                                    <Card
                                        className="w-1/4"
                                        href="#"
                                        onClick={() => {
                                            setSelectedList(
                                                'KitchenInventoryGroups',
                                            );
                                        }}
                                    >
                                        <div className="flex flex-col items-center gap-5">
                                            <img
                                                width={150}
                                                height={150}
                                                src="https://cdn-icons-png.flaticon.com/512/1027/1027128.png"
                                                alt="image 1"
                                                className="p-5 rounded"
                                            />
                                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                                Cocina
                                            </h5>
                                        </div>
                                    </Card>
                                    <Card
                                        className="w-1/4"
                                        href="#"
                                        onClick={() => {
                                            setSelectedList(
                                                'PizzaInventoryGroups',
                                            );
                                        }}
                                    >
                                        <div className="flex flex-col items-center gap-5">
                                            <img
                                                width={150}
                                                height={150}
                                                src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
                                                alt="image 2"
                                                className="p-5 rounded"
                                            />
                                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                                Pizzas
                                            </h5>
                                        </div>
                                    </Card>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = (page: ReactElement<PageProps>) => (
    <AuthenticatedLayout user={page.props.auth.user} children={page} />
);

export default Index;
