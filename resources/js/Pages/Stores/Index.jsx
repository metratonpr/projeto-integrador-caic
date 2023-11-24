import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import StoreTable from "./StoreTable";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Index({ auth, stores }) {
    return (
        <HeaderCustom auth={auth} title={"Stores"} head={"Stores"}>
            <StoreTable stores={stores} />
        </HeaderCustom>

    );
}
