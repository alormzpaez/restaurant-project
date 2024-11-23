import InventoryGroupStatus from '@/Components/InventoryGroupStatus';
import { InventoryGroup } from '@/types';
import { Button, Table } from 'flowbite-react';
import { FaEdit } from 'react-icons/fa';

export default function KitchenInventoryGroupShow({
    inventoryGroup,
}: {
    inventoryGroup: InventoryGroup;
}) {
    return (
        <div>
            <h5 className="block w-64 p-4 tracking-tight text-gray-900 bg-yellow-400 rounded-lg rounded-bl-none rounded-br-none dark:text-white">
                {inventoryGroup.date}
            </h5>
            <Table>
                <Table.Head>
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>Hambs.</Table.HeadCell>
                    <Table.HeadCell>Bags.</Table.HeadCell>
                    <Table.HeadCell>Pastas</Table.HeadCell>
                    <Table.HeadCell>Ensalads.</Table.HeadCell>
                    <Table.HeadCell>Alambs.</Table.HeadCell>
                    <Table.HeadCell>Queso F.</Table.HeadCell>
                    <Table.HeadCell>Molletes</Table.HeadCell>
                    <Table.HeadCell>Cortes</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Venta
                        </Table.Cell>
                        <Table.Cell>
                            {inventoryGroup.hamburger_sold_quantity}
                        </Table.Cell>
                        <Table.Cell>
                            {inventoryGroup.baguette_sold_quantity}
                        </Table.Cell>
                        <Table.Cell>
                            {inventoryGroup.pasta_sold_quantity}
                        </Table.Cell>
                        <Table.Cell>
                            {inventoryGroup.salad_sold_quantity}
                        </Table.Cell>
                        <Table.Cell>
                            {inventoryGroup.alambre_sold_quantity}
                        </Table.Cell>
                        <Table.Cell>
                            {inventoryGroup.quesoFundido_sold_quantity}
                        </Table.Cell>
                        <Table.Cell>
                            {inventoryGroup.mollete_sold_quantity}
                        </Table.Cell>
                        <Table.Cell>
                            {inventoryGroup.corte_sold_quantity}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <div className="p-24 py-10">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Producto</Table.HeadCell>
                        <Table.HeadCell>Inicial</Table.HeadCell>
                        <Table.HeadCell>Realizado</Table.HeadCell>
                        <Table.HeadCell>Vendido</Table.HeadCell>
                        <Table.HeadCell>Disponible</Table.HeadCell>
                        <Table.HeadCell>Estatus</Table.HeadCell>
                        <Table.HeadCell></Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Arrachera
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.arrachera_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.arrachera_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.arrachera_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.arrachera_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.arrachera_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pollo
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.pollo_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.pollo_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.pollo_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.pollo_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.pollo_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Chistorra
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.chistorra_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.chistorra_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.chistorra_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.chistorra_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.chistorra_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pan Hambs.
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.panHams_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.panHams_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.panHams_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.panHams_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.panHams_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pan Bags.
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.panBags_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.panBags_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.panBags_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.panBags_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.panBags_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Papas
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.papas_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.papas_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.papas_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.papas_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.papas_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Chuleta
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.chuleta_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.chuleta_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.chuleta_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.chuleta_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.chuleta_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Molida
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.molida_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.molida_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.molida_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.molida_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.molida_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Asada
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.asada_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.asada_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.asada_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.asada_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.asada_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pastor
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.pastor_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.pastor_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.pastor_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.pastor_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.pastor_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Fettuccine
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.fettuccine_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.fettuccine_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.fettuccine_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.fettuccine_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.fettuccine_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Carne hambs.
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.carneHamb_remaining_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.carneHamb_made_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.carneHamb_sold_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {inventoryGroup.carneHamb_useful_quantity}
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        inventoryGroup.carneHamb_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            {/* <Button>Guardar resumen</Button> */}
        </div>
    );
}
