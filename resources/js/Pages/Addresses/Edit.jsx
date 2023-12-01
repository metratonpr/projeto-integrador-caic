import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage  } from '@inertiajs/react';
import AddressForm from './AddressesForm';
import HeaderCustom from '@/Components/HeaderCustom';

export default function Create({ auth, address,zip_code }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        number: address.number || '',
        complement: address.complement || '',
        zipcode_id: address.zipcode_id || '',
        entity_id: address.entity_id || '',
        zipcode: zip_code.zipcode || '',
        editar: true
    });

    const submit = (e) => {
        e.preventDefault();
               patch(route('addressess.update',address.id), {});
    };

    const cancel = () => {
        if (window.confirm("Are you sure you want to cancel?")) {
            reset();
        }
    };

    return (
        <HeaderCustom auth={auth} title={"Entities"} head={"Edit Entity"}>
            {console.log(address)}
                <AddressForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    submit={submit}
                    cancel={cancel}
                    processing={processing}
                    editar={true}
                />
          </HeaderCustom>

    );
}
