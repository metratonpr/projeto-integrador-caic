import React, { useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputSelect from "@/Components/InputSelect";
import axios from "axios";

const CustomForm = ({
    data,
    errors,
    setData,
    submit,
    cancel,
    processing,
    states,
    neighborhoods,
}) => {
    // const [zipcode, setZipCode] = useState("");
    const [state, setState] = useState("");
    // const [city, setCity] = useState("");
    // const [place, setPlace] = useState("");
    const [cities, setCities] = useState([]);
    // const [neighborhood, setNeighborhood] = useState("");

    const handleState = async (e) => {
        e.preventDefault();
        // setState(e.target.value);
        setState(e.target.value);
        setCities([]);

        searchCities(e.target.value);
    };

    const searchCities = async (state) => {
        try {
            const response = await axios.get(
                route("cities.search_by_states", { id: state })
            );

            setCities(response.data);
            if (cities.length > 0) {
                setData("city", cities[0].id);
            }
            // console.log("Resultado: ", response);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const searchZipCodes = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                route("zip-codes.search", { zipcode: data.zipcode })
            );

            const zip = response.data;

            console.log(zip);
            console.log(data);

            if (zip.length > 0) {
                const { id, city, neighborhood_id, place } = zip[0];
                console.log("Items:", id, city, neighborhood_id, place)

                setData("zipcode_id", id);

                setData("place", place);

                setState(city.state_id);
                searchCities(city.state_id);
                setData("neighborhood", neighborhood_id);
                setData("city", city.id);

                // setPlace(place);
                // setState(city.state_id);
                // searchCities(city.state_id);
                // setCity(city.id);
                // setNeighborhood(neighborhood_id);
            }
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    useEffect(() => {
        // Verifica se há pelo menos um item no array 'states'
        if (states.length > 0) {
            // Define o estado para o ID do primeiro item no array
            setData("state", states[0].id);
        }
        // Dependência vazia significa que este efeito só será executado uma vez após a montagem inicial
    }, []);

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

            <div className="mb-2">
                {/* Adicione o campo de seleção para os estados */}
                <InputLabel htmlFor="state" value="State" />
                <InputSelect
                    id="state"
                    name="state"
                    type="select"
                    options={states}
                    value={state}
                    className="mt-1 block w-full"
                    onChange={handleState}
                    required
                />
                <InputError message={errors.state} className="mt-2" />
            </div>

            <div className="mb-2">
                {/* Adicione o campo de seleção para os estados */}
                <InputLabel htmlFor="city_id" value="City" />
                <InputSelect
                    id="city_id"
                    name="city_id"
                    type="select"
                    options={cities}
                    value={data.city}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("city", e.target.value)}
                    required
                />
                <InputError message={errors.state_id} className="mt-2" />
            </div>

            <div className="mb-2">
                {/* Adicione o campo de seleção para os estados */}
                <InputLabel htmlFor="neighborhood" value="Neighborhood" />
                <InputSelect
                    id="neighborhood"
                    name="neighborhood"
                    type="select"
                    options={neighborhoods}
                    value={data.neighborhood}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("neighborhood", e.target.value)}
                    required
                />
                <InputError message={errors.state_id} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="place" value="Place" />
                <TextInput
                    id="place"
                    name="place"
                    value={data.place}
                    className="mt-1 block w-full"
                    autoComplete="place"
                    onChange={(e) => setData("place", e.target.value)}
                    required
                />
                <InputError message={errors.place} className="mt-2" />
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
