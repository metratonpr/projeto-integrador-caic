import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputSelect from "@/Components/InputSelect";

const StateForm = ({
    data,
    errors,
    setData,
    submit,
    cancel,
    processing,
    cities,
    neighborhoods
}) => {
    return (
        <form onSubmit={submit} encType="multipart/form-data" className="w-1/2 mx-auto">
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
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="place" value="Place" />
                <TextInput
                    id="place"
                    name="place"
                    value={data.place}
                    className="mt-1 block w-full"
                    autoComplete="place"
                    isFocused={true}
                    onChange={(e) => setData("place", e.target.value)}
                    required
                />
                <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mb-2">
                    {/* Adicione o campo de seleção para os estados */}
                    <InputLabel htmlFor="neighborhood_id" value="Neighborhood" />
                    <InputSelect
                        id="neighborhood_id"
                        name="neighborhood_id"
                        type="select"
                        options={neighborhoods}
                        value={data.neighborhood_id}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("neighborhood_id", e.target.value)}
                        required
                    />
                    <InputError message={errors.neighborhood_id} className="mt-2" />
                </div>

            <div className="mb-2">
                    {/* Adicione o campo de seleção para os estados */}
                    <InputLabel htmlFor="city_id" value="Cities" />
                    <InputSelect
                        id="city_id"
                        name="city_id"
                        type="select"
                        options={cities}
                        value={data.city_id}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("city_id", e.target.value)}
                        required
                    />
                    <InputError message={errors.city_id} className="mt-2" />
                </div>

            <div className="space-x-2">
                <PrimaryButton className="mt-4" type="submit" disabled={processing}>
                    Salvar
                </PrimaryButton>
                <button className="mt-4" onClick={cancel} disabled={processing}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default StateForm;
