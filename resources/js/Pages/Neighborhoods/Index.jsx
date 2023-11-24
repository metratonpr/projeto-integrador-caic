
import React from "react";
import NeighborhoodTable from "./NeighborhoodTable";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Index({ auth, neighborhoods }) {
    return (
        <HeaderCustom auth={auth} title={"Neighborhoods"} head={"Neighborhoods"}>
            <NeighborhoodTable neighborhoods={neighborhoods} />
        </HeaderCustom>
    );
}
