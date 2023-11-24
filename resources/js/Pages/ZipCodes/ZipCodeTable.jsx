
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
  const { zip_codes } = usePage().props;

  const handleRemove = (zip_code) => {
    if (window.confirm(`Are you sure you want to remove the ${zip_code.name}?`)) {
        // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
        // Após a exclusão, redirecione para a página inicial ou uma página apropriada
        router.delete(route("zip-codes.destroy", zip_code.id));
    }
};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center gap-4 mb-2">
        <NavLink
          href={route('zip-codes.create')}
          active={route().current('zip-codes.index')}
          className="inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 p-5"
        >
          New Zip Code
        </NavLink>
      </div>
      <DataTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Zip Code</TableHeaderCell>
            <TableHeaderCell>Placa</TableHeaderCell>
            <TableHeaderCell>Neighborhood</TableHeaderCell>
            <TableHeaderCell>City</TableHeaderCell>
            <TableHeaderCell colSpan={2} style={{ width: '20%' }}>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {zip_codes.map((zip_code) => (
            <TableRow key={zip_code.id}>
              <TableCell>{zip_code.zipcode}</TableCell>
              <TableCell>{zip_code.place}</TableCell>
              <TableCell>{zip_code.neighborhood.name}</TableCell>
              <TableCell>{zip_code.city.name}</TableCell>
              <TableCell style={{ width: '10%' }}>
                <NavLink
                  href={route('zip-codes.edit', { zip_code: zip_code.id })}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
              </TableCell>
              <TableCell style={{ width: '10%' }}>
                <TableButton
                  onClick={() => handleRemove(zip_code)}
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
