import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import InputSelect from "@/Components/InputSelect";

const CustomForm = ({
    data,
    errors,
    setData,
    submit,
    cancel,
    processing,
    zip_codes
}) => {
    return (
        <form onSubmit={submit} encType="multipart/form-data" className="w-1/2 mx-auto">
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
                <InputLabel htmlFor="contact" value="Contact" />
                <TextInput
                    id="contact"
                    name="contact"
                    value={data.contact}
                    className="mt-1 block w-full"
                    autoComplete="contact"
                    isFocused={true}
                    onChange={(e) => setData("contact", e.target.value)}
                    required
                />
                <InputError message={errors.contact} className="mt-2" />
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
                    type="email"
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
            <div>
                <InputLabel htmlFor="cnpj" value="CNPJ" />
                <TextInput
                    id="cnpj"
                    name="cnpj"
                    value={data.cnpj}
                    className="mt-1 block w-full"
                    autoComplete="cnpj"
                    isFocused={true}
                    onChange={(e) => setData("cnpj", e.target.value)}
                    required
                />
                <InputError message={errors.cnpj} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="number" value="number" />
                <TextInput
                    id="number"
                    name="number"
                    value={data.number}
                    className="mt-1 block w-full"
                    autoComplete="number"
                    isFocused={true}
                    onChange={(e) => setData("number", e.target.value)}
                    required
                />
                <InputError message={errors.number} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="complement" value="Complement" />
                <TextInput
                    id="complement"
                    name="complement"
                    value={data.complement}
                    className="mt-1 block w-full"
                    autoComplete="complement"
                    isFocused={true}
                    onChange={(e) => setData("complement", e.target.value)}
                    required
                />
                <InputError message={errors.phone} className="mt-2" />
            </div>

            <div className="mb-2">
                    {/* Adicione o campo de seleção para os enderecos */}
                    <InputLabel htmlFor="zip_code_id" value="Zip Codes" />
                    <InputSelect
                        id="zip_code_id"
                        name="zip_code_id"
                        type="select"
                        options={zip_codes}
                        value={data.zip_code_id}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("zip_code_id", e.target.value)}
                        required
                    />
                    <InputError message={errors.zip_code_id} className="mt-2" />
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

export default CustomForm;
