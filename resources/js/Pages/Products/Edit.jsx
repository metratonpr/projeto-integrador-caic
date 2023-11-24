import React, { useproduct } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage  } from '@inertiajs/react';
import ProductForm from './ProductForm';
import HeaderCustom from '@/Components/HeaderCustom';

export default function Create({ auth, product, product_types }) {
    const { data, setData, patch, processing, reset, errors } = useForm({
        name: product.name || "",
        description: product.description || "",
        warranty: product.warranty || "",
        warranty_time: product.warranty_time || "",
        product_type_id: product.product_type_id || "",
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('products.update', product.id), {});
    };

    const cancel = () => {
        if (window.confirm("Are you sure you want to cancel?")) {
            reset();
        }
    };

    return (
        <HeaderCustom auth={auth} title={"products"} head={"Edit product"}>
                <ProductForm
                    data={data}
                    errors={errors}
                    setData={setData}
                    submit={submit}
                    cancel={cancel}
                    processing={processing}
                    product_types={product_types}
                />
          </HeaderCustom>

    );
}
