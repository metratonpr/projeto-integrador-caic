import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import StateForm from './NeighborhoodForm';

export default function Create({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("neighborhoods.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    const cancel = () => {
        if (window.confirm("Are you sure you want to cancel?")) {
            reset();
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Neighborhood</h2>}
        >
            <Head title="Create" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <StateForm
                    data={data}
                    errors={errors}
                    setData={setData}                    
                    submit={submit}
                    cancel={cancel}
                    processing={processing}
                />
            </div>
        </AuthenticatedLayout>
    );
}
