import React from 'react';
import { useForm  } from '@inertiajs/react';
import ZipCodeForm from './ZipCodeForm';
import HeaderCustom from '@/Components/HeaderCustom';

export default function Create({ auth, zip_code,  cities, neighborhoods }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        zipcode: zip_code.zipcode || "",
        place: zip_code.place  || "",
        city_id: zip_code.city_id || "",
        neighborhood_id: zip_code.neighborhood_id || "",
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('zip-codes.update', state.id), {});
    };

    const cancel = () => {
        if (window.confirm("Are you sure you want to cancel?")) {
            reset();
        }
    };

    return (
        <HeaderCustom auth={auth} title={"Zip Codes"} head={"Edit Zip Code"}>


                <ZipCodeForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    submit={submit}
                    cancel={cancel}
                    processing={processing}
                    cities={cities}
                    neighborhoods={neighborhoods}
                />
            </HeaderCustom>

    );
}
