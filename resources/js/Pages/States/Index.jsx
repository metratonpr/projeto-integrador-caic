import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import StatesTable from "./StatesTable";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Index({ auth, states }) {
    return (
        <HeaderCustom auth={auth} title={"States"} head={"States"}>
            <StatesTable states={states} />
        </HeaderCustom>

    );
}
