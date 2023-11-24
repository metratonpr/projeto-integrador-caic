import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import InputSelect from "@/Components/InputSelect";

const CustomForm = ({ data, errors, setData, submit, cancel, processing,product_types }) => {
    const opcoes = [
        {
          "id": 1,
          "label": "Sim",
        },
        {
          "id": 0,
          "label": "Não",
        }
      ]

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
                <InputLabel htmlFor="description" value="Description" />
                <TextAreaInput
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    autoComplete="description"
                    isFocused={true}
                    onChange={(e) => setData("description", e.target.value)}
                    required
                />
                <InputError message={errors.description} className="mt-2" />
            </div>

            <div className="mb-2">
                {/* Adicione o campo de seleção para os estados */}
                <InputLabel htmlFor="warranty" value="Warranty" />
                <InputSelect
                    id="warranty"
                    name="warranty"
                    type="select"
                    options={opcoes}
                    value={data.warranty}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("warranty", e.target.value)}
                    required
                />
                <InputError message={errors.warranty} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="warranty_time" value="Warranty Time" />
                <TextInput
                    id="warranty_time"
                    name="warranty_time"
                    value={data.warranty_time}
                    className="mt-1 block w-full"
                    autoComplete="warranty_time"
                    isFocused={true}
                    onChange={(e) => setData("warranty_time", e.target.value)}
                    required
                />
                <InputError message={errors.warranty_time} className="mt-2" />
            </div>

            <div className="mb-2">
                {/* Adicione o campo de seleção para os estados */}
                <InputLabel htmlFor="product_type_id" value="Product Type" />
                <InputSelect
                    id="product_type_id"
                    name="product_type_id"
                    type="select"
                    options={product_types}
                    value={data.product_type_id}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("product_type_id", e.target.value)}
                    required
                />
                <InputError message={errors.product_type_id} className="mt-2" />
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
