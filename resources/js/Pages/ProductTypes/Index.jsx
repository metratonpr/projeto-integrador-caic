import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import ProductTypeTable from "./ProductTypeTable";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Index({ auth, product_types }) {
    return (
        <HeaderCustom auth={auth} title={"Product Types"} head={"Product Types"}>
            <ProductTypeTable product_types={product_types} />
        </HeaderCustom>

    );
}
