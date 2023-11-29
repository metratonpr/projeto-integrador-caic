import EntitiesTable from "./AddressesTable";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Index({ auth, addresses, entity }) {
    return (
        <HeaderCustom auth={auth} title={entity.name} head={"Addresses"}>

            <EntitiesTable addresses={addresses} />
        </HeaderCustom>

    );
}
