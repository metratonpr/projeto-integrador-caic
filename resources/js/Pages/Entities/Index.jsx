import EntitiesTable from "./EntitiesTable";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Index({ auth, entities }) {
    return (
        <HeaderCustom auth={auth} title={"Entities"} head={"Entities"}>
            <EntitiesTable entities={entities} />
        </HeaderCustom>

    );
}
