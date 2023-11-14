import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { router } from "@inertiajs/react";
import NavLink from '@/Components/NavLink';
import StatesTable from './StatesTable';

export default function Index({ auth, states }) {

    const handleNew = () => {
        // Redirecione para a página de edição do post com base na rota
        router.visit(route("posts.create"));
    };

    const handleEdit = (post) => {
        // Redirecione para a página de edição do post com base na rota
        router.visit(route("posts.edit", post.id));
    };

    const handleRemove = (post) => {
        if (window.confirm("Tem certeza de que deseja remover o post?")) {
            // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
            // Após a exclusão, redirecione para a página inicial ou uma página apropriada
            router.delete(route("posts.destroy", post.id));
        }
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">States</h2>}
        >
            <Head title="State" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <StatesTable states={states} />
            </div>
        </AuthenticatedLayout>
    );
}