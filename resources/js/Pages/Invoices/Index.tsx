import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Invoice, PageProps } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { Button, Table } from 'flowbite-react';
import { ReactElement } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function Index({
    invoices
}: PageProps<{
    invoices: Invoice[]
}>) {
    const {
        delete: destroy,
        errors,
        processing,
    } = useForm();

    const submitDestroy = (invoiceId: number) => {
        destroy(route("invoices.destroy", invoiceId), {
            preserveScroll: true
        });
    };

    return (
        <>
            <Head title="Facturas" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="flex justify-center gap-10 p-6 text-gray-900 dark:text-gray-100">
                            <div className="w-full overflow-x-auto">
                                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                    Facturas
                                </h5>

                                <br />

                                <Table>
                                    <Table.Head>
                                        <Table.HeadCell># Id</Table.HeadCell>
                                        <Table.HeadCell>Fecha</Table.HeadCell>
                                        <Table.HeadCell>Cliente</Table.HeadCell>
                                        <Table.HeadCell>
                                            Acciones
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        {invoices.map((invoice) => (
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {invoice.id}
                                                </Table.Cell>
                                                <Table.Cell>{invoice.created_at}</Table.Cell>
                                                <Table.Cell>
                                                    {invoice.client}
                                                </Table.Cell>
                                                <Table.Cell className="flex gap-2">
                                                    <Button size="sm" onClick={() => {
                                                        router.visit(route("invoices.show", invoice.id))
                                                    }}>Ver</Button>
                                                    <Button
                                                        size="xs"
                                                        outline
                                                        color="red"
                                                        onClick={() => {
                                                            let answer = confirm('¿Estás seguro de eliminar este elemento?')

                                                            if (answer) {
                                                                submitDestroy(invoice.id)
                                                            }
                                                        }}
                                                    >
                                                        <MdDelete className="w-6 h-6" />
                                                    </Button>
                                                    <Button
                                                        size="xs"
                                                        outline
                                                        color="yellow"
                                                        onClick={() => {
                                                            router.visit(route('invoices.edit', invoice.id))
                                                        }}
                                                    >
                                                        <FaEdit className="w-6 h-6" />
                                                    </Button>
                                                </Table.Cell>
                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table>

                                <br />

                                {/* <Button>Crear nueva factura</Button> */}
                            </div>
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
