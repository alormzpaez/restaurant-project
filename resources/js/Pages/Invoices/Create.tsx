import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Invoice, PageProps } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Button } from 'flowbite-react';
import { ReactElement } from 'react';

function Create({
    invoice,
}: PageProps<{
    invoice: Invoice;
}>) {
    return (
        <>
            <Head title="Factura" />

            <div className="py-12 tracking-tight">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="flex justify-center gap-10 p-6 text-gray-900 dark:text-gray-100">
                            <div className="w-full overflow-x-auto">
                                <div>
                                    <div className="flex items-center">
                                        <img
                                            width={150}
                                            height={150}
                                            src="http://localhost/images/logo.png"
                                            alt="image 1"
                                            className=""
                                        />
                                        <div className="flex flex-col items-center flex-1">
                                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                                Martha Rasgado Lopez
                                            </h5>
                                            <span className="font-normal text-gray-700 dark:text-gray-400">
                                                RFC: RALM610729B47
                                            </span>
                                        </div>
                                        <span className="flex-1 font-normal text-gray-700 dark:text-gray-400">
                                            5 de Septiembre 34-B Col. Centro CP.
                                            70000, Juchitan de Zaragoza, Oaxaca,
                                            México
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex flex-col items-center w-1/3 px-20">
                                            <span className="font-normal text-gray-700 dark:text-gray-400">
                                                Número
                                            </span>
                                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                                000001
                                            </h5>
                                        </div>
                                        <div className="flex flex-col flex-1 p-2 border border-black">
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Lugar de expedición: 70000
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Régimen fiscal: 612-Personas
                                                físicas con actividades
                                                empresariales y profesionales
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex flex-col items-center w-1/3 px-20">
                                            <span className="font-normal text-gray-700 dark:text-gray-400">
                                                Fecha
                                            </span>
                                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                                04/08/2021
                                            </h5>
                                        </div>
                                        <div className="flex flex-col flex-1 p-2 tracking-tight border border-black">
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                <strong>Cliente:</strong>{' '}
                                                {invoice.client}
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                <strong>RFC:</strong>{' '}
                                                {invoice.rfc}
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                <strong>
                                                    Domicilio fiscal:
                                                </strong>{' '}
                                                {invoice.tax_domicile}
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                <strong>Método de pago:</strong>{' '}
                                                {invoice.payment_mode}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex flex-col items-center w-full px-20 py-4">
                                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                                Factura
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-full">
                                            <table
                                                cellSpacing={10}
                                                className="w-full"
                                            >
                                                <thead>
                                                    <tr className="">
                                                        <th className="w-1/5 p-2 text-left">
                                                            Cantidad
                                                        </th>
                                                        <th className="w-1/5 p-2 text-left">
                                                            Unidad
                                                        </th>
                                                        <th className="w-1/5 p-2 text-left">
                                                            Descripción
                                                        </th>
                                                        <th className="w-1/5 p-2 text-left">
                                                            Precio unitario
                                                        </th>
                                                        <th className="w-1/5 p-2 text-left">
                                                            Importe
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="p-2 border-t border-b border-black">
                                                            1
                                                        </td>
                                                        <td className="p-2 border-t border-b border-black">
                                                            Servicio
                                                        </td>
                                                        <td className="p-2 border-t border-b border-black">
                                                            Consumo de alimentos
                                                            {invoice.created_at}
                                                        </td>
                                                        <td className="p-2 border-t border-b border-black">
                                                            ${invoice.subtotal.toFixed(2)}
                                                        </td>
                                                        <td className="p-2 border-t border-b border-black">
                                                            ${invoice.subtotal.toFixed(2)}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex flex-col w-3/5 p-2">
                                            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                                Comprobante fiscal digital por internet
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Folio fiscal: {invoice.tax_folio}
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Número de comprobante: {invoice.voucher_number}
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Forma de pago: {
                                                    invoice.payment_method == 'cash' ? '01-Efectivo' : '02-Tarjeta'
                                                }
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Fecha comprobante: {invoice.voucher_date}
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Fecha de certificación del CFDI: {invoice.cfdi_date}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center flex-1 p-2">
                                            <div className="flex justify-between w-full font-normal text-gray-700 dark:text-gray-400">
                                                <span>
                                                    Subtotal:
                                                </span>
                                                <span>
                                                    ${invoice.subtotal.toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="flex justify-between w-full font-normal text-gray-700 dark:text-gray-400">
                                                <span>
                                                    Descuento:
                                                </span>
                                                <span>
                                                    $0.00
                                                </span>
                                            </div>
                                            <div className="flex justify-between w-full font-normal text-gray-700 dark:text-gray-400">
                                                <span>
                                                    IVA(16)%:
                                                </span>
                                                <span>
                                                    ${invoice.iva.toFixed(2)}
                                                </span>
                                            </div>
                                            <br />
                                            <div className="flex justify-between w-full font-normal text-gray-700 border-t border-black dark:text-gray-400">
                                                <span className='font-bold'>
                                                    Total:
                                                </span>
                                                <span>
                                                    ${invoice.total.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <br />

                                    <div className='flex justify-center w-full gap-5'>
                                        <Button onClick={() => {
                                            router.visit(route('invoices.index'))
                                        }}>
                                            Cerrar
                                        </Button>
                                        <Button>
                                            Enviar por correo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Create.layout = (page: ReactElement<PageProps>) => (
    <AuthenticatedLayout user={page.props.auth.user} children={page} />
);

export default Create;
