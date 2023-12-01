import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

//Componentes
import DataTable from "@/Components/DataTable";
import TableHeader from "@/Components/TableHeader";
import TableHeaderCell from "@/Components/TableHeaderCell";
import TableBody from "@/Components/TableBody";
import TableRow from "@/Components/TableRow";
import TableCell from "@/Components/TableCell";
import TableButton from "@/Components/TableButton";
import NavLink from "@/Components/NavLink";

const CustomTable = () => {
    const { addresses, entity } = usePage().props;

    const handleRemove = (address) => {
        if (
            window.confirm(
                `Are you sure you want to remove the ${address.zipcode.place}?`
            )
        ) {
            // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
            // Após a exclusão, redirecione para a página inicial ou uma página apropriada
            router.delete(route("addresses.destroy", address.id));
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center gap-4 mb-2">
                <NavLink
                    href={route("entities.create_address",{
                        entity: entity,
                    })}
                    active={route().current("entities.index")}
                    className="inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 p-5"
                >
                    New address
                </NavLink>
            </div>
            <DataTable>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Zip Code</TableHeaderCell>
                        <TableHeaderCell>Place</TableHeaderCell>
                        <TableHeaderCell>Number</TableHeaderCell>
                        <TableHeaderCell>Complement</TableHeaderCell>
                        <TableHeaderCell>City</TableHeaderCell>
                        <TableHeaderCell colSpan={2} style={{ width: "20%" }}>
                            Actions
                        </TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {addresses.map((address) => (
                        <TableRow key={address.id}>
                            {console.log(address)}
                            <TableCell>{address.zipcode.zipcode}</TableCell>
                            <TableCell>{address.zipcode.place}</TableCell>
                            <TableCell>{address.number}</TableCell>
                            <TableCell>{address.complement}</TableCell>
                            <TableCell>{address.zipcode.city.name}</TableCell>
                            <TableCell style={{ width: "10%" }}>
                                <NavLink
                                    href={route("entities.edit_address", {
                                        address: address.id,
                                        entity: entity
                                    })}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </NavLink>
                            </TableCell>
                            <TableCell style={{ width: "10%" }}>
                                <TableButton
                                    onClick={() => handleRemove(address)}
                                    className="text-red-600 dark:text-red-500 hover:underline"
                                >
                                    Delete
                                </TableButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </DataTable>
        </div>
    );
};

export default CustomTable;
