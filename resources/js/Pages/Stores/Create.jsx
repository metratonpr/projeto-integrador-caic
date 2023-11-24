import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import StateForm from "./StoreForm";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Create({ auth,zip_codes }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        contact: "",
        email: "",
        phone: "",
        cnpj: "",
        number: "",
        complement: "",
        zip_code_id: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("stores.store"), {
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
        <HeaderCustom auth={auth} title={"Stores"} head={"Create Store"}>

                <StateForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    submit={submit}
                    cancel={cancel}
                    processing={processing}
                    zip_codes={zip_codes}
                />

        </HeaderCustom>
    );
}
