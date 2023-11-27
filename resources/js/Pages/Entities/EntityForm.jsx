import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

const CustomForm = ({ data, errors, setData, submit, cancel, processing }) => {


    return (
        <form
            onSubmit={submit}
            encType="multipart/form-data"
            className="w-1/2 mx-auto"
        >
            <div>
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
            <div>
                <InputLabel htmlFor="cpf_cnpj" value="CNPJ/CPF" />
                <TextInput
                    id="cpf_cnpj"
                    name="name"
                    value={data.cpf_cnpj}
                    className="mt-1 block w-full"
                    autoComplete="cpf_cnpj"
                    isFocused={true}
                    onChange={(e) => setData("cpf_cnpj", e.target.value)}
                    required
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="rg_ie" value="IE/RG" />
                <TextInput
                    id="rg_ie"
                    name="rg_ie"
                    value={data.rg_ie}
                    className="mt-1 block w-full"
                    autoComplete="rg_ie"
                    isFocused={true}
                    onChange={(e) => setData("rg_ie", e.target.value)}
                    required
                />
                <InputError message={errors.rg_ie} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="email" value="E-mail" />
                <TextInput
                    id="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="email"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="phone" value="Phone" />
                <TextInput
                    id="phone"
                    name="phone"
                    value={data.phone}
                    className="mt-1 block w-full"
                    autoComplete="phone"
                    isFocused={true}
                    onChange={(e) => setData("phone", e.target.value)}
                    required
                />
                <InputError message={errors.phone} className="mt-2" />
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
