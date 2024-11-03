import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { User } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Button, Sidebar } from 'flowbite-react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { GiNotebook } from 'react-icons/gi';
import { HiArrowSmRight, HiMenu } from 'react-icons/hi';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { MdInventory } from 'react-icons/md';

export default function Authenticated({
    user,
    children,
}: PropsWithChildren<{ user: User|null }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between w-full h-16 pl-4 mx-auto sm:px-6 lg:px-8">
                    <Link href="/" className="flex gap-2">
                        <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9 dark:text-gray-200" />
                        <span className="self-center hidden text-xl font-semibold whitespace-nowrap dark:text-white md:block">
                            El Gratín
                        </span>
                    </Link>
                    <div className="flex">
                        <Button
                            className="block mr-2 md:hidden"
                            color="gray"
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    !showingNavigationDropdown
                                )
                            }
                        >
                            <HiMenu className="text-2xl" />
                        </Button>
                    </div>
                </div>
            </nav>

            <div className="flex flex-col md:flex-row">
                <div
                    className={
                        showingNavigationDropdown
                            ? "block"
                            : "hidden" + " md:block"
                    }
                >
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="w-full md:w-56"
                    >
                        <Sidebar.Items
                            className="flex-grow"
                            style={{ height: "calc(100vh - 6.1rem)" }}
                        >
                            <Sidebar.ItemGroup>
                                <Link
                                    onClick={() => {
                                        setShowingNavigationDropdown(false);
                                    }}
                                    href={route("order-groups.create")}
                                >
                                    <Sidebar.Item href="#" icon={GiNotebook}>
                                        Pedidos
                                    </Sidebar.Item>
                                </Link>
                                <Link
                                    onClick={() => {
                                        setShowingNavigationDropdown(false);
                                    }}
                                    href={route("invoices.index")}
                                >
                                    <Sidebar.Item href="#" icon={LiaFileInvoiceDollarSolid}>
                                        Facturas
                                    </Sidebar.Item>
                                </Link>
                                <Link
                                    onClick={() => {
                                        setShowingNavigationDropdown(false);
                                    }}
                                    href={route("inventory-groups.index")}
                                >
                                    <Sidebar.Item href="#" icon={MdInventory}>
                                        Inventarios
                                    </Sidebar.Item>
                                </Link>
                                <Link
                                    onClick={() => {
                                        setShowingNavigationDropdown(false);
                                    }}
                                    href={route("logout")}
                                    method="post"
                                >
                                    <Sidebar.Item icon={HiArrowSmRight}>
                                        Cerrar sesión
                                    </Sidebar.Item>
                                </Link>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>

                <main className="flex-grow overflow-hidden">{children}</main>
            </div>

            {/* {header && (
                <header className="bg-white shadow dark:bg-gray-800">
                    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )} */}

            {/* <main>{children}</main> */}
        </div>
    );
}
