import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Invoice, InvoicePaymentMethod, PageProps } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { Button, Textarea } from 'flowbite-react';
import { ReactElement, useEffect } from 'react';

function Edit({
    invoice,
}: PageProps<{
    invoice: Invoice;
}>) {
    const {
        data,
        setData,
        put,
        processing,
        errors
    } = useForm<{
        client: string;
        rfc: string;
        tax_domicile: string;
        payment_mode: string;
        tax_folio: string;
        voucher_number: number;
        voucher_date: string;
        payment_method: InvoicePaymentMethod;
        cfdi_date: string;
    }>({
        client: invoice.client,
        rfc: invoice.rfc,
        tax_domicile: invoice.tax_domicile,
        payment_mode: invoice.payment_mode,
        tax_folio: invoice.tax_folio,
        voucher_number: invoice.voucher_number,
        voucher_date: invoice.voucher_date,
        payment_method: invoice.payment_method,
        cfdi_date: invoice.cfdi_date
    });

    const submitUpdateInvoice = () => {
        put(route('invoices.update', invoice.id))
    }

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
                                                <TextInput
                                                    id="client"
                                                    type="text"
                                                    name="client"
                                                    value={data.client}
                                                    required    
                                                    className="block w-full mt-1"
                                                    isFocused={true}
                                                    onChange={(e) => setData('client', e.target.value)}
                                                />
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                <strong>RFC:</strong>{' '}
                                                <TextInput
                                                    id="rfc"
                                                    type="text"
                                                    name="rfc"
                                                    value={data.rfc}
                                                    required    
                                                    className="block w-full mt-1"
                                                    onChange={(e) => setData('rfc', e.target.value)}
                                                />
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                <strong>
                                                    Domicilio fiscal:
                                                </strong>{' '}
                                                <Textarea
                                                    id="tax_domicile"
                                                    name="tax_domicile"
                                                    value={data.tax_domicile}
                                                    required    
                                                    className="block w-full mt-1"
                                                    onChange={(e) => setData('tax_domicile', e.target.value)}
                                                />
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                <strong>Método de pago:</strong>{' '}
                                                <TextInput
                                                    id="payment_mode"
                                                    type="text"
                                                    name="payment_mode"
                                                    value={data.payment_mode}
                                                    required    
                                                    className="block w-full mt-1"
                                                    onChange={(e) => setData('payment_mode', e.target.value)}
                                                />
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
                                                            Consumo de alimentos{' '}
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
                                                Folio fiscal:{' '} 
                                                <TextInput
                                                    id="tax_folio"
                                                    type="text"
                                                    name="tax_folio"
                                                    value={data.tax_folio}
                                                    required    
                                                    className="block w-full mt-1"
                                                    onChange={(e) => setData('tax_folio', e.target.value)}
                                                />
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Número de comprobante:{' '}
                                                <TextInput
                                                    id="voucher_number"
                                                    type="number"
                                                    name="voucher_number"
                                                    value={data.voucher_number}
                                                    required    
                                                    className="block w-full mt-1"
                                                    onChange={(e) => setData('voucher_number', Number(e.target.value))}
                                                />
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Forma de pago: {
                                                    invoice.payment_method == 'cash' ? '01-Efectivo' : '02-Tarjeta'
                                                }
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Fecha comprobante:{' '}
                                                <TextInput
                                                    id="voucher_date"
                                                    type="date"
                                                    name="voucher_date"
                                                    value={data.voucher_date}
                                                    required    
                                                    className="block w-full mt-1"
                                                    onChange={(e) => setData('voucher_date', e.target.value)}
                                                />
                                            </p>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Fecha de certificación del CFDI:{' '}
                                                <TextInput
                                                    id="cfdi_date"
                                                    type="date"
                                                    name="cfdi_date"
                                                    value={data.cfdi_date}
                                                    required    
                                                    className="block w-full mt-1"
                                                    onChange={(e) => setData('cfdi_date', e.target.value)}
                                                />
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
                                        <Button onClick={() => {
                                            submitUpdateInvoice()
                                        }}>
                                            Guardar
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

Edit.layout = (page: ReactElement<PageProps>) => (
    <AuthenticatedLayout user={page.props.auth.user} children={page} />
);

export default Edit;
