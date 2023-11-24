
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
  const { stores } = usePage().props;

  const handleRemove = (store) => {
    if (window.confirm(`Are you sure you want to remove the ${store.name}?`)) {
        // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
        // Após a exclusão, redirecione para a página inicial ou uma página apropriada
        router.delete(route("stores.destroy", store.id));
    }
};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center gap-4 mb-2">
        <NavLink
          href={route('stores.create')}
          active={route().current('stores.index')}
          className="inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 p-5"
        >
          New Store
        </NavLink>
      </div>
      <DataTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Contact</TableHeaderCell>
            <TableHeaderCell>E-mail</TableHeaderCell>
            <TableHeaderCell>Phone</TableHeaderCell>
            <TableHeaderCell>CNPJ</TableHeaderCell>
            <TableHeaderCell>Number</TableHeaderCell>
            <TableHeaderCell>Complement</TableHeaderCell>
            <TableHeaderCell>Zip Code</TableHeaderCell>
            <TableHeaderCell colSpan={2} style={{ width: '20%' }}>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stores.map((store) => (
            <TableRow key={store.id}>
              <TableCell style={{ width: '70%' }}>{store.name}</TableCell>
              <TableCell style={{ width: '70%' }}>{store.contact}</TableCell>
              <TableCell style={{ width: '70%' }}>{store.email}</TableCell>
              <TableCell style={{ width: '70%' }}>{store.phone}</TableCell>
              <TableCell style={{ width: '70%' }}>{store.cnpj}</TableCell>
              <TableCell style={{ width: '70%' }}>{store.number}</TableCell>
              <TableCell style={{ width: '70%' }}>{store.complement}</TableCell>
              <TableCell style={{ width: '70%' }}>{store.zipcode.place}</TableCell>
              <TableCell style={{ width: '10%' }}>
                <NavLink
                  href={route('stores.edit', { store: store.id })}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
              </TableCell>
              <TableCell style={{ width: '10%' }}>
                <TableButton
                  onClick={() => handleRemove(store)}
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
