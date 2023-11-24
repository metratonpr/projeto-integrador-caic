
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
  const { entities } = usePage().props;

  const handleRemove = (entity) => {
    if (window.confirm(`Are you sure you want to remove the ${entity.name}?`)) {
        // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
        // Após a exclusão, redirecione para a página inicial ou uma página apropriada
        router.delete(route("entities.destroy", entity.id));
    }
};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center gap-4 mb-2">
        <NavLink
          href={route('entities.create')}
          active={route().current('entities.index')}
          className="inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 p-5"
        >
          New Entity
        </NavLink>
      </div>
      <DataTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>CNPJ/CPF</TableHeaderCell>
            <TableHeaderCell>RG/IE</TableHeaderCell>
            <TableHeaderCell>E-mail</TableHeaderCell>
            <TableHeaderCell>Phone</TableHeaderCell>
            <TableHeaderCell colSpan={2} style={{ width: '20%' }}>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entities.map((entity) => (
            <TableRow key={entity.id}>
              <TableCell >{entity.name}</TableCell>
              <TableCell >{entity.cpf_cnpj}</TableCell>
              <TableCell >{entity.rg_ie}</TableCell>
              <TableCell >{entity.email}</TableCell>
              <TableCell >{entity.phone}</TableCell>
              <TableCell style={{ width: '10%' }}>
                <NavLink
                  href={route('entities.edit', { entity: entity.id })}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
              </TableCell>
              <TableCell style={{ width: '10%' }}>
                <TableButton
                  onClick={() => handleRemove(entity)}
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
