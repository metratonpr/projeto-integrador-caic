import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage  } from '@inertiajs/react';
import StateForm from './StateForm';
import HeaderCustom from '@/Components/HeaderCustom';

export default function Create({ auth, state }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        name: state.name || "",
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('states.update', state.id), {});
    };

    const cancel = () => {
        if (window.confirm("Are you sure you want to cancel?")) {
            reset();
        }
    };

    return (
        <HeaderCustom auth={auth} title={"States"} head={"Edit State"}>
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
