
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
  const { product_types } = usePage().props;

  const handleRemove = (product_type) => {
    if (window.confirm(`Are you sure you want to remove the ${product_type.name}?`)) {
        // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
        // Após a exclusão, redirecione para a página inicial ou uma página apropriada
        router.delete(route("product-types.destroy", product_type.id));
    }
};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center gap-4 mb-2">
        <NavLink
          href={route('product-types.create')}
          active={route().current('product-types.index')}
          className="inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 p-5"
        >
          New Product Type
        </NavLink>
      </div>
      <DataTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell colSpan={2} style={{ width: '20%' }}>Actions</TableHeaderCell>
          </TableRow>
    </TableHeader>
        <TableBody>
          {product_types.map((product_type) => (
            <TableRow key={product_type.id}>
              <TableCell style={{ width: '70%' }}>{product_type.name}</TableCell>
              <TableCell style={{ width: '10%' }}>
                <NavLink
                  href={route('product-types.edit', { product_type: product_type.id })}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
              </TableCell>
              <TableCell style={{ width: '10%' }}>
                <TableButton
                  onClick={() => handleRemove(product_type)}
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
