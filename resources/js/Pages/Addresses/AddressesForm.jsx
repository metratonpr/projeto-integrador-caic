import React, { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputSelect from "@/Components/InputSelect";
import axios from "axios";

const CustomForm = ({ data, errors, setData, submit, cancel, processing, editar }) => {
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [place, setPlace] = useState("");
    const [neighborhood, setNeighborhood] = useState("");

    const handleState = async (e) => {
        e.preventDefault();
        setState(e.target.value);
    };

    const searchZipCodes = async (e) => {
        e.preventDefault();

        console.log('search')

        if (data.zipcode.length > 0) {
            try {
                const response = await axios.get(
                    route("zip-codes.search", { zipcode: data.zipcode })
                );

                const zip = response.data;

                console.log(zip);
                console.log("Antes >", data);

                if (zip.length > 0) {
                    const { id, city, neighborhood, place, state } = zip[0];
                    setPlace(place);
                    setCity(city.name);
                    setState(city.state.name);
                    setNeighborhood(neighborhood.name);
                    setData("zipcode_id", id);
                    console.log("Depois >", data);
                }
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
    };

    useEffect(() => {
        // Verifica se data.edit é true e executa a pesquisa automaticamente
        if (editar) {
            console.log(data)
            const fakeEvent = { preventDefault: () => {} };
            searchZipCodes(fakeEvent); // Você pode passar um evento vazio aqui
        }
    }, [editar]); // Execute o efeito quando data.edit muda

    return (
        <form
            onSubmit={submit}
            encType="multipart/form-data"
            className="w-1/2 mx-auto"
        >
            <div>
                <InputLabel htmlFor="zipcode" value="Zip Code" />
                <TextInput
                    id="zipcode"
                    name="zipcode"
                    value={data.zipcode}
                    className="mt-1 block w-full"
                    autoComplete="zipcode"
                    isFocused={true}
                    onChange={(e) => setData("zipcode", e.target.value)}
                    required
                />
                <InputError message={errors.zipcode} className="mt-2" />

                <div className="space-x-1">
                    <button
                        className="mt-2"
                        onClick={searchZipCodes}
                        disabled={processing}
                    >
                        Pesquisar Cep
                    </button>
                </div>
            </div>

            <div>
                <InputLabel htmlFor="state" value="State" />
                <TextInput
                    id="state"
                    name="state"
                    value={state}
                    className="mt-1 block w-full"
                    autoComplete="state"
                    onChange={(e) => setState(e.target.value)}
                    disabled={true}
                />
            </div>
            <div>
                <InputLabel htmlFor="city" value="City" />
                <TextInput
                    id="city"
                    name="city"
                    value={city}
                    className="mt-1 block w-full"
                    autoComplete="city"
                    onChange={(e) => setCity(e.target.value)}
                    disabled={true}
                />
            </div>

            <div>
                <InputLabel htmlFor="neighborhood" value="Neighborhood" />
                <TextInput
                    id="neighborhood"
                    name="neighborhood"
                    value={neighborhood}
                    className="mt-1 block w-full"
                    autoComplete="neighborhood"
                    onChange={(e) => setNeighborhood(e.target.value)}
                    disabled={true}
                />
            </div>

            <div>
                <InputLabel htmlFor="place" value="Place" />
                <TextInput
                    id="place"
                    name="place"
                    value={place}
                    className="mt-1 block w-full"
                    autoComplete="place"
                    onChange={(e) => setPlace(e.target.value)}
                    disabled={true}
                />
            </div>
            <div>
                <InputLabel htmlFor="number" value="Number" />
                <TextInput
                    id="number"
                    name="number"
                    value={data.number}
                    className="mt-1 block w-full"
                    autoComplete="number"
                    onChange={(e) => setData("number", e.target.value)}
                    required
                />
                <InputError message={errors.place} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="complement" value="Complement" />
                <TextInput
                    id="complement"
                    name="complement"
                    value={data.complement}
                    className="mt-1 block w-full"
                    autoComplete="complement"
                    onChange={(e) => setData("complement", e.target.value)}
                    required
                />
                <InputError message={errors.place} className="mt-2" />
            </div>

            <div className="space-x-2">
                <PrimaryButton
                    className="mt-4"
                    type="submit"
                    disabled={processing}
                >
                    Salvar
                </PrimaryButton>
                <button className="mt-4" onClick={cancel} disabled={processing}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default CustomForm;
