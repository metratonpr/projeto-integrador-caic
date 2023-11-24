import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage  } from '@inertiajs/react';
import StateForm from './ProductTypeForm';
import HeaderCustom from '@/Components/HeaderCustom';

export default function Create({ auth, product_type }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        name: product_type.name || "",
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('product-types.update', product_type.id), {});
    };

    const cancel = () => {
        if (window.confirm("Are you sure you want to cancel?")) {
            reset();
        }
    };

    return (
        <HeaderCustom auth={auth} title={"Product Types"} head={"Edit Product Type"}>
                <StateForm
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
