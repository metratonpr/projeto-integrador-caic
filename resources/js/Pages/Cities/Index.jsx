import React from "react";
import CitiesTable from "./CitiesTable";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Index({ auth, cities }) {
    return (
        <HeaderCustom auth={auth} title={"Cities"} head={"Cities"}>
            <CitiesTable cities={cities} />
        </HeaderCustom>
    );
}
