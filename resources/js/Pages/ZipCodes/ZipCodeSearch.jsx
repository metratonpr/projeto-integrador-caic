import React, { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import DataTable from "@/Components/DataTable";
import TableHeader from "@/Components/TableHeader";
import TableHeaderCell from "@/Components/TableHeaderCell";
import TableBody from "@/Components/TableBody";
import TableRow from "@/Components/TableRow";
import TableCell from "@/Components/TableCell";
import TableButton from "@/Components/TableButton";
import { router } from '@inertiajs/react'

export default function ZipCodeSearch({ selectZipCode }) {
    const [query, setQuery] = useState("");

    const [results, setResults] = useState([]);

    const handleKeyUp = (e) => {
        // Adicionando um atraso (debounce) para evitar muitas chamadas enquanto o usuário digita
        setTimeout(() => {
            console.log(query)
            handleSearch();
        }, 300);
    };

    const handleSearch = async () => {
        try {
            const response = await router.get(`/zip-codes-search`, { query }, { preserveState: true });
            console.log("Resultado: ",response)
            setResults(response);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }

    };

    return (
        <div>
            <div>
                <InputLabel htmlFor="zip_code_search" value="Zip Code Search" />
                <TextInput
                    id="zip_code_search"
                    name="zip_code_search"
                    value={query}
                    className="mt-1 block w-full"
                    autoComplete="zip_code_search"
                    isFocused={true}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={handleKeyUp} // Adicionando o evento onKeyUp
                />
            </div>

            <DataTable>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Zip Code</TableHeaderCell>
                        <TableHeaderCell>Placa</TableHeaderCell>
                        <TableHeaderCell>Neighborhood</TableHeaderCell>
                        <TableHeaderCell>City</TableHeaderCell>
                        <TableHeaderCell colSpan={2} style={{ width: "20%" }}>
                            Actions
                        </TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {results && results.map((zip_code) => (
                        <TableRow key={zip_code.id}>
                            <TableCell>{zip_code.zipcode}</TableCell>
                            <TableCell>{zip_code.place}</TableCell>
                            <TableCell>{zip_code.neighborhood.name}</TableCell>
                            <TableCell>{zip_code.city.name}</TableCell>
                            <TableCell style={{ width: "10%" }}>
                                <TableButton
                                    onClick={() => selectZipCode}
                                    className="text-red-600 dark:text-red-500 hover:underline"
                                >
                                    Select
                                </TableButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </DataTable>
        </div>
    );
}
