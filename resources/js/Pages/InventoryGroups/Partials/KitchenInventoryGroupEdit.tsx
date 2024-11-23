import InventoryGroupStatus from '@/Components/InventoryGroupStatus';
import TextInput from '@/Components/TextInput';
import { InventoryGroup } from '@/types';
import { useForm } from '@inertiajs/react';
import { Button, Table } from 'flowbite-react';

export default function KitchenInventoryGroupEdit({
    inventoryGroup,
}: {
    inventoryGroup: InventoryGroup;
}) {
    const { data, setData, put, processing, errors } = useForm<{
        hamburger_sold_quantity: number;
        baguette_sold_quantity: number;
        pasta_sold_quantity: number;
        salad_sold_quantity: number;
        quesoFundido_sold_quantity: number;
        alambre_sold_quantity: number;
        corte_sold_quantity: number;
        mollete_sold_quantity: number;
        arrachera_remaining_quantity: number;
        arrachera_made_quantity: number;
        arrachera_useful_quantity: number;
        arrachera_sold_quantity: number;
        pollo_remaining_quantity: number;
        pollo_made_quantity: number;
        pollo_useful_quantity: number;
        pollo_sold_quantity: number;
        chistorra_remaining_quantity: number;
        chistorra_made_quantity: number;
        chistorra_useful_quantity: number;
        chistorra_sold_quantity: number;
        panHams_remaining_quantity: number;
        panHams_made_quantity: number;
        panHams_useful_quantity: number;
        panHams_sold_quantity: number;
        panBags_remaining_quantity: number;
        panBags_made_quantity: number;
        panBags_useful_quantity: number;
        panBags_sold_quantity: number;
        papas_remaining_quantity: number;
        papas_made_quantity: number;
        papas_useful_quantity: number;
        papas_sold_quantity: number;
        chuleta_remaining_quantity: number;
        chuleta_made_quantity: number;
        chuleta_useful_quantity: number;
        chuleta_sold_quantity: number;
        molida_remaining_quantity: number;
        molida_made_quantity: number;
        molida_useful_quantity: number;
        molida_sold_quantity: number;
        asada_remaining_quantity: number;
        asada_made_quantity: number;
        asada_useful_quantity: number;
        asada_sold_quantity: number;
        pastor_remaining_quantity: number;
        pastor_made_quantity: number;
        pastor_useful_quantity: number;
        pastor_sold_quantity: number;
        fettuccine_remaining_quantity: number;
        fettuccine_made_quantity: number;
        fettuccine_useful_quantity: number;
        fettuccine_sold_quantity: number;
        carneHamb_remaining_quantity: number;
        carneHamb_made_quantity: number;
        carneHamb_useful_quantity: number;
        carneHamb_sold_quantity: number;
    }>({
        hamburger_sold_quantity: inventoryGroup.hamburger_sold_quantity ?? 0,
        baguette_sold_quantity: inventoryGroup.baguette_sold_quantity ?? 0,
        pasta_sold_quantity: inventoryGroup.pasta_sold_quantity ?? 0,
        salad_sold_quantity: inventoryGroup.salad_sold_quantity ?? 0,
        quesoFundido_sold_quantity:
            inventoryGroup.quesoFundido_sold_quantity ?? 0,
        alambre_sold_quantity: inventoryGroup.alambre_sold_quantity ?? 0,
        corte_sold_quantity: inventoryGroup.corte_sold_quantity ?? 0,
        mollete_sold_quantity: inventoryGroup.mollete_sold_quantity ?? 0,
        arrachera_remaining_quantity:
            inventoryGroup.arrachera_remaining_quantity ?? 0,
        arrachera_made_quantity: inventoryGroup.arrachera_made_quantity ?? 0,
        arrachera_useful_quantity:
            inventoryGroup.arrachera_useful_quantity ?? 0,
        arrachera_sold_quantity: inventoryGroup.arrachera_sold_quantity ?? 0,
        pollo_remaining_quantity: inventoryGroup.pollo_remaining_quantity ?? 0,
        pollo_made_quantity: inventoryGroup.pollo_made_quantity ?? 0,
        pollo_useful_quantity: inventoryGroup.pollo_useful_quantity ?? 0,
        pollo_sold_quantity: inventoryGroup.pollo_sold_quantity ?? 0,
        chistorra_remaining_quantity:
            inventoryGroup.chistorra_remaining_quantity ?? 0,
        chistorra_made_quantity: inventoryGroup.chistorra_made_quantity ?? 0,
        chistorra_useful_quantity:
            inventoryGroup.chistorra_useful_quantity ?? 0,
        chistorra_sold_quantity: inventoryGroup.chistorra_sold_quantity ?? 0,
        panHams_remaining_quantity:
            inventoryGroup.panHams_remaining_quantity ?? 0,
        panHams_made_quantity: inventoryGroup.panHams_made_quantity ?? 0,
        panHams_useful_quantity: inventoryGroup.panHams_useful_quantity ?? 0,
        panHams_sold_quantity: inventoryGroup.panHams_sold_quantity ?? 0,
        panBags_remaining_quantity:
            inventoryGroup.panBags_remaining_quantity ?? 0,
        panBags_made_quantity: inventoryGroup.panBags_made_quantity ?? 0,
        panBags_useful_quantity: inventoryGroup.panBags_useful_quantity ?? 0,
        panBags_sold_quantity: inventoryGroup.panBags_sold_quantity ?? 0,
        papas_remaining_quantity: inventoryGroup.papas_remaining_quantity ?? 0,
        papas_made_quantity: inventoryGroup.papas_made_quantity ?? 0,
        papas_useful_quantity: inventoryGroup.papas_useful_quantity ?? 0,
        papas_sold_quantity: inventoryGroup.papas_sold_quantity ?? 0,
        chuleta_remaining_quantity:
            inventoryGroup.chuleta_remaining_quantity ?? 0,
        chuleta_made_quantity: inventoryGroup.chuleta_made_quantity ?? 0,
        chuleta_useful_quantity: inventoryGroup.chuleta_useful_quantity ?? 0,
        chuleta_sold_quantity: inventoryGroup.chuleta_sold_quantity ?? 0,
        molida_remaining_quantity:
            inventoryGroup.molida_remaining_quantity ?? 0,
        molida_made_quantity: inventoryGroup.molida_made_quantity ?? 0,
        molida_useful_quantity: inventoryGroup.molida_useful_quantity ?? 0,
        molida_sold_quantity: inventoryGroup.molida_sold_quantity ?? 0,
        asada_remaining_quantity: inventoryGroup.asada_remaining_quantity ?? 0,
        asada_made_quantity: inventoryGroup.asada_made_quantity ?? 0,
        asada_useful_quantity: inventoryGroup.asada_useful_quantity ?? 0,
        asada_sold_quantity: inventoryGroup.asada_sold_quantity ?? 0,
        pastor_remaining_quantity:
            inventoryGroup.pastor_remaining_quantity ?? 0,
        pastor_made_quantity: inventoryGroup.pastor_made_quantity ?? 0,
        pastor_useful_quantity: inventoryGroup.pastor_useful_quantity ?? 0,
        pastor_sold_quantity: inventoryGroup.pastor_sold_quantity ?? 0,
        fettuccine_remaining_quantity:
            inventoryGroup.fettuccine_remaining_quantity ?? 0,
        fettuccine_made_quantity: inventoryGroup.fettuccine_made_quantity ?? 0,
        fettuccine_useful_quantity:
            inventoryGroup.fettuccine_useful_quantity ?? 0,
        fettuccine_sold_quantity: inventoryGroup.fettuccine_sold_quantity ?? 0,
        carneHamb_remaining_quantity:
            inventoryGroup.carneHamb_remaining_quantity ?? 0,
        carneHamb_made_quantity: inventoryGroup.carneHamb_made_quantity ?? 0,
        carneHamb_useful_quantity:
            inventoryGroup.carneHamb_useful_quantity ?? 0,
        carneHamb_sold_quantity: inventoryGroup.carneHamb_sold_quantity ?? 0,
    });

    const submit = () => {
        // console.log("Data: ", data)
        put(route('inventory-groups.update', inventoryGroup.id), {
            // onFinish: () => reset('password'),
        });
    };

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
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.hamburger_sold_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'hamburger_sold_quantity',
                                        parseInt(e.target.value),
                                    );
                                }}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.baguette_sold_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'baguette_sold_quantity',
                                        parseInt(e.target.value),
                                    );
                                }}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.pasta_sold_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'pasta_sold_quantity',
                                        parseInt(e.target.value),
                                    );
                                }}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.salad_sold_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'salad_sold_quantity',
                                        parseInt(e.target.value),
                                    );
                                }}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.alambre_sold_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'alambre_sold_quantity',
                                        parseInt(e.target.value),
                                    );
                                }}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.quesoFundido_sold_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'quesoFundido_sold_quantity',
                                        parseInt(e.target.value),
                                    );
                                }}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.mollete_sold_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'mollete_sold_quantity',
                                        parseInt(e.target.value),
                                    );
                                }}
                            />
                        </Table.Cell>
                        <Table.Cell>
                            <TextInput
                                id="client"
                                type="number"
                                name="client"
                                value={data.corte_sold_quantity ?? 0}
                                required
                                className="block w-full mt-1"
                                isFocused={false}
                                onChange={(e) => {
                                    setData(
                                        'corte_sold_quantity',
                                        parseInt(e.target.value),
                                    );
                                }}
                            />
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
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={
                                        data.arrachera_remaining_quantity ?? 0
                                    }
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'arrachera_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.arrachera_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'arrachera_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.arrachera_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'arrachera_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.arrachera_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'arrachera_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.arrachera_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pollo
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.pollo_remaining_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'pollo_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.pollo_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'pollo_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.pollo_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'pollo_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.pollo_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'pollo_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.pollo_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Chistorra
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={
                                        data.chistorra_remaining_quantity ?? 0
                                    }
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'chistorra_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.chistorra_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'chistorra_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.chistorra_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'chistorra_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.chistorra_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'chistorra_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.chistorra_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pan Hambs.
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.panHams_remaining_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'panHams_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.panHams_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'panHams_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.panHams_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'panHams_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.panHams_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'panHams_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.panHams_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pan Bags.
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.panBags_remaining_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'panBags_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.panBags_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'panBags_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.panBags_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'panBags_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.panBags_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'panBags_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.panBags_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Papas
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.papas_remaining_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'papas_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.papas_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'papas_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.papas_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'papas_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.papas_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'papas_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.papas_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Chuleta
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.chuleta_remaining_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'chuleta_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.chuleta_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'chuleta_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.chuleta_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'chuleta_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.chuleta_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'chuleta_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.chuleta_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Molida
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.molida_remaining_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'molida_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.molida_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'molida_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.molida_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'molida_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.molida_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'molida_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.molida_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Asada
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.asada_remaining_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'asada_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.asada_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'asada_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.asada_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'asada_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.asada_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'asada_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.asada_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pastor
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.pastor_remaining_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'pastor_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.pastor_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'pastor_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.pastor_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'pastor_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.pastor_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'pastor_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.pastor_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Fettuccine
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={
                                        data.fettuccine_remaining_quantity ?? 0
                                    }
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'fettuccine_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.fettuccine_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'fettuccine_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.fettuccine_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'fettuccine_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.fettuccine_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'fettuccine_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.fettuccine_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Carne hambs.
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={
                                        data.carneHamb_remaining_quantity ?? 0
                                    }
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'carneHamb_remaining_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.carneHamb_made_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'carneHamb_made_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.carneHamb_sold_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'carneHamb_sold_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextInput
                                    id="client"
                                    type="number"
                                    name="client"
                                    value={data.carneHamb_useful_quantity ?? 0}
                                    required
                                    className="block w-full mt-1"
                                    isFocused={false}
                                    onChange={(e) => {
                                        setData(
                                            'carneHamb_useful_quantity',
                                            parseInt(e.target.value),
                                        );
                                    }}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <InventoryGroupStatus
                                    usefulQuantity={
                                        data.carneHamb_useful_quantity
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <Button onClick={submit}>Guardar resumen</Button>
        </div>
    );
}
