import React from 'react';
import CityForm from './CityForm';
import HeaderCustom from '@/Components/HeaderCustom';
import {useForm } from '@inertiajs/react';

export default function Create({ auth, states, city }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        name: city.name || "",
        state_id: city.state_id || "",
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('cities.update', city.id), {});
    };

    const cancel = () => {
        if (window.confirm("Are you sure you want to cancel?")) {
            reset();
        }
    };

    return (
        <HeaderCustom auth={auth} title={"Cities"} head={"Edit City"}>
                <CityForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    submit={submit}
                    cancel={cancel}
                    processing={processing}
                    states={states}
                />
            </HeaderCustom>

    );
}
