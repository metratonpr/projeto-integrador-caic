import NavLink from '@/Components/NavLink';
import { usePage } from '@inertiajs/react';
import { router } from "@inertiajs/react";

const CustomTable = () => {
  const { neighborhoods } = usePage().props;

  const handleRemove = (neighborhood) => {
    if (window.confirm(`Are you sure you want to remove the ${neighborhood.name}`)) {
        // Implemente a lógica para remover o post (por exemplo, fazendo uma solicitação de exclusão)
        // Após a exclusão, redirecione para a página inicial ou uma página apropriada
        router.delete(route("neighborhoods.destroy", neighborhood.id));
    }
};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center gap-4 mb-2">
        <NavLink
          href={route('neighborhoods.create')}
          active={route().current('neighborhoods.index')}
          className="inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          New Neighborhood
        </NavLink>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-2">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3" colSpan={2} style={{ width: '20%' }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {neighborhoods.map((neighborhood) => (
            <tr key={neighborhood.id} className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {neighborhood.name}
              </th>
              <td className="px-6 py-4 text-right" style={{ width: '10%' }}>
                <NavLink
                  href={route('neighborhoods.edit', { neighborhood: neighborhood.id })}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
                </td>
                <td className="px-6 py-4 text-right" style={{ width: '10%' }}>
                <button
                  onClick={() => handleRemove(neighborhood)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
