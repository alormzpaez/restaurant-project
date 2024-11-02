import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from "@/types";
import { Head } from '@inertiajs/react';
import { ReactElement } from "react";

function Index({
}: PageProps) {
    return(
        <>
            <Head title="Ordenes" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Ordenes - Index
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Index.layout = (page: ReactElement<PageProps>) => (
    <AuthenticatedLayout user={page.props.auth.user} children={page} />
);

export default Index;