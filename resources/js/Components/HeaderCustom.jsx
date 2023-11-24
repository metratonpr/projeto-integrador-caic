// TableHeaderCell.jsx
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function HeaderCustom({ children, auth, title, head }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={head} />
            <div className="w-90 mx-auto p-4 sm:p-6 lg:p-8">
                {children}
            </div>
        </AuthenticatedLayout>
    );
}
