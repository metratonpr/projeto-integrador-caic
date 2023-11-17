import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputSelect from "@/Components/InputSelect";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

const CityForm = ({
    data,
    errors,
    setData,
    submit,
    cancel,
    processing,
    states,
}) => {
    return (
        <form onSubmit={submit} encType="multipart/form-data">

                <div className="mb-2">
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mb-2">
                    {/* Adicione o campo de seleção para os estados */}
                    <InputLabel htmlFor="state_id" value="State" />
                    <InputSelect
                        id="state_id"
                        name="state_id"
                        type="select"
                        options={states}
                        value={data.state_id}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("state_id", e.target.value)}
                        required
                    />
                    <InputError message={errors.state_id} className="mt-2" />
                </div>

                <div className="space-x-2">
                    <PrimaryButton
                        className="mt-4"
                        type="submit"
                        disabled={processing}
                    >
                        Salvar
                    </PrimaryButton>
                    <button
                        className="mt-4"
                        onClick={cancel}
                        disabled={processing}
                    >
                        Cancelar
                    </button>
                </div>

        </form>
    );
};

export default CityForm;
