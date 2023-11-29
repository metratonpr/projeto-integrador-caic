import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage  } from '@inertiajs/react';
import EntityForm from './AddressesForm';
import HeaderCustom from '@/Components/HeaderCustom';

export default function Create({ auth, entity }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        name: entity.name || "",
        cpf_cnpj: entity.cpf_cnpj || "",
        rg_ie: entity.rg_ie || "",
        email: entity.email || "",
        phone: entity.phone || "",
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('entities.update', entity.id), {});
    };

    const cancel = () => {
        if (window.confirm("Are you sure you want to cancel?")) {
            reset();
        }
    };

    return (
        <HeaderCustom auth={auth} title={"Entities"} head={"Edit Entity"}>
                <EntityForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    submit={submit}
                    cancel={cancel}
                    processing={processing}
                />
          </HeaderCustom>

    );
}
