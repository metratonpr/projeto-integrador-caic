import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import ProductsTable from "./ProductsTable";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Index({ auth, products }) {
    return (
        <HeaderCustom auth={auth} title={"Products"} head={"Products"}>
            <ProductsTable products={products} />
        </HeaderCustom>

    );
}
