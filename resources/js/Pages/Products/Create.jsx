import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import StateForm from "./ProductForm";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Create({ auth, product_types }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        description: "",
        warranty: "",
        warranty_time: "",
        product_type_id: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("products.store"), {
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
        <HeaderCustom auth={auth} title={"Products"} head={"Create Products"}>

                <StateForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    submit={submit}
                    cancel={cancel}
                    processing={processing}
                    product_types={product_types}
                />

        </HeaderCustom>
    );
}
