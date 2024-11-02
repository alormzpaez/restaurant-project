import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { OrderGroup, PageProps } from "@/types";
import { Head, Link } from '@inertiajs/react';
import { Badge, Button, Card, Navbar } from 'flowbite-react';
import { ReactElement } from "react";

function Index({
    orderGroups
}: PageProps<{ orderGroups: OrderGroup[] }>) {
    return (
        <>
            <Head title="Ordenes" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <Navbar fluid rounded>
                                <Navbar.Toggle />
                                <Navbar.Collapse>
                                    <Navbar.Link as={Link} href={route("order-groups.create")}>
                                        Crear pedido
                                    </Navbar.Link>
                                    <Navbar.Link as={Link} href={route("order-groups.index")} active>
                                        Administrar pedidos
                                    </Navbar.Link>
                                </Navbar.Collapse>
                            </Navbar>

                            <br />

                            <div className="flex flex-col gap-2 border">
                                {orderGroups.map((orderGroup) => (
                                    <Card>
                                        <div className="flex items-center justify-between">
                                            <h5 className="tracking-tight text-gray-900 dark:text-white">
                                                No. {orderGroup.id}
                                            </h5>
                                            <div className="flex items-center gap-2">
                                                {orderGroup.apply_invoice && (
                                                    <h5 className="tracking-tight text-gray-900 dark:text-white">
                                                        Solicita factura
                                                    </h5>
                                                )}
                                                {orderGroup.status ==
                                                'unfinished' ? (
                                                    <Badge color="gray">
                                                        Sin concluir
                                                    </Badge>
                                                ) : orderGroup.status ==
                                                  'finished' ? (
                                                    <Badge color="warning">
                                                        Finalizada
                                                    </Badge>
                                                ) : (
                                                    <Badge color="red">
                                                        Cancelada
                                                    </Badge>
                                                )}
                                                <Button size="sm">Ver</Button>
                                                <h5 className="tracking-tight text-gray-900 dark:text-white">
                                                    ${orderGroup.total.toFixed(2)}
                                                </h5>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
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