import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import AddressForm from "./AddressesForm";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Create({ auth, entity}) {
    const { data, setData, post, processing, reset, errors } = useForm({
        number: "",
        complement: "",
        zipcode_id: "",
        entity_id: entity.id,
        zipcode: "",

    });

    const submit = (e) => {
        e.preventDefault();

        console.log(data);
        post(route("address.store",{entity}), {
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
        <HeaderCustom auth={auth} title={"Address"} head={"Create Address"}>
            <AddressForm
                data={data}
                errors={errors}
                setData={setData}
                submit={submit}
                cancel={cancel}
                processing={processing}
                editar={false}
            />
        </HeaderCustom>
    );
}
