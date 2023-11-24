import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import StateForm from "./ZipCodeForm";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Create({ auth, cities, neighborhoods}) {
    const { data, setData, post, processing, reset, errors } = useForm({
        zipcode: "",
        place: "",
        city_id: "",
        neighborhood_id: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("zip-codes.store"), {
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
        <HeaderCustom auth={auth} title={"Zip Codes"} head={"Create Zip Code"}>

                <StateForm
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
