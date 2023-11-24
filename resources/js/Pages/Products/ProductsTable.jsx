
import { usePage } from '@inertiajs/react';
import { router } from "@inertiajs/react";

//Componentes
import DataTable from '@/Components/DataTable';
import TableHeader from '@/Components/TableHeader';
import TableHeaderCell from '@/Components/TableHeaderCell';
import TableBody from '@/Components/TableBody';
import TableRow from '@/Components/TableRow';
import TableCell from '@/Components/TableCell';
import TableButton from '@/Components/TableButton';
import NavLink from '@/Components/NavLink';

const CustomTable = () => {
  const { products } = usePage().props;

  const handleRemove = (product) => {
    if (window.confirm(`Are you sure you want to remove the ${product.name}?`)) {
        // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
        // Após a exclusão, redirecione para a página inicial ou uma página apropriada
        router.delete(route("products.destroy", product.id));
    }
};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center gap-4 mb-2">
        <NavLink
          href={route('products.create')}
          active={route().current('products.index')}
          className="inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 p-5"
        >
          New Product
        </NavLink>
      </div>
      <DataTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Warranty</TableHeaderCell>
            <TableHeaderCell>Warranty Time</TableHeaderCell>
            <TableHeaderCell>Product Type</TableHeaderCell>
            <TableHeaderCell colSpan={2} style={{ width: '20%' }}>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.warranty}</TableCell>
              <TableCell>{product.warranty_time}</TableCell>
              <TableCell>{product.product_type.name}</TableCell>
              <TableCell style={{ width: '10%' }}>
                <NavLink
                  href={route('products.edit', { product: product.id })}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
              </TableCell>
              <TableCell style={{ width: '10%' }}>
                <TableButton
                  onClick={() => handleRemove(product)}
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
