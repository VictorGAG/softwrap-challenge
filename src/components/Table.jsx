import React, { useState, useEffect } from 'react';

export default function TableComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      {
        name: 'Victor Gabriel',
        age: '18',
        status: 'married',
        cpf: '535.054.028-93',
        city: 'Ubatuba',
        state: 'São Paulo',
      },
      {
        name: 'Camilly Santos',
        age: '18',
        status: 'married',
        cpf: '535.054.028-93',
        city: 'Ubatuba',
        state: 'São Paulo',
      },
    ]);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-white pt-6 shadow rounded-md mx-auto">
        <div className="px-4">
          <h1 className="text-lg leading-6 font-medium text-gray-900">Table of User</h1>
        </div>
        <div className="mt-6">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-400">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-grady-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left font-medium text-grady-500 uppercase">Age</th>
                <th className="px-6 py-3 text-left font-medium text-grady-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left font-medium text-grady-500 uppercase">CPF</th>
                <th className="px-6 py-3 text-left font-medium text-grady-500 uppercase">City</th>
                <th className="px-6 py-3 text-left font-medium text-grady-500 uppercase">State</th>
                <th className="px-6 py-3 text-left text-gray-400 font-medium text-grady-500 uppercase">Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.age}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.status}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.cpf}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.city}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.state}</td>
                  <td className="px-6 py-4 text-sm font-medium text-blue-400 whitespace-nowrap"><a href="a">Edit</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
