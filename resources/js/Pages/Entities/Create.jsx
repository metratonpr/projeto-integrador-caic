import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import StateForm from "./EntityForm";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Create({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        cpf_cnpj: "",
        rg_ie: "",
        email: "",
        phone: "",

    });

    const submit = (e) => {
        e.preventDefault();
        post(route("entities.store"), {
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
        <HeaderCustom auth={auth} title={"Entities"} head={"Create Entity"}>

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
