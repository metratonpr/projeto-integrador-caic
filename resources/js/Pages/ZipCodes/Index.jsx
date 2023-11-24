import ZipCodeTable from "./ZipCodeTable";
import HeaderCustom from "@/Components/HeaderCustom";

export default function Index({ auth, zip_codes, cities, neighborhoods }) {
    return (
        <HeaderCustom auth={auth} title={"Zip Codes"} head={"Zip Codes"}>
            <ZipCodeTable zip_codes={zip_codes} />
        </HeaderCustom>
    );
}
