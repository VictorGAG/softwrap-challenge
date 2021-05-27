/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../firebase';

export default function TableComponent() {
  const [users, setUsers] = useState([]);
  const [size, setSize] = useState();
  const [seeing, setSeeing] = useState(5);

  useEffect(() => {
    const getPerson = async () => {
      const results = await Api.takePerson();
      setUsers(results);
    };

    const getSize = async () => {
      const results = await Api.takeSize();
      const totalPages = Math.ceil(results / 6);
      const arrayPages = [];

      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }
      setSize(results);
    };
    getSize();
    getPerson();
  }, []);

  const handleNext = async () => {
    setSeeing(seeing + 5);
    const results = await Api.takeNextPerson();
    setUsers(results);
  };

  const handlePrevius = async () => {
    setSeeing(seeing - 5);
    const results = await Api.takePreviusPerson();
    setUsers(results);
  };

  return (
    <div className="md:flex md:mx-auto md:my-28 max-w-screen-md block">
      <div className="bg-white pt-6 rounded-md mx-auto">
        <div className="flex justify-between px-8">
          <h1 className="text-lg leading-6 font-medium text-gray-900">Table of User</h1>
          <h1 className="text-lg leading-6 font-medium text-gray-400">See the users bellow</h1>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-5 text-left font-medium text-white uppercase">Name</th>
                <th className="px-6 py-5 text-left font-medium text-white uppercase">Age</th>
                <th className="px-6 py-5 text-left font-medium text-white uppercase">Status</th>
                <th className="px-6 py-5 text-left font-medium text-white uppercase">CPF</th>
                <th className="px-6 py-5 text-left font-medium text-white uppercase">City</th>
                <th className="px-6 py-5 text-left font-medium text-white uppercase">State</th>
                <th className="px-6 py-5 text-left text-gray-800 font-medium uppercase">Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr>
                  <td className="px-6 py-8 md:py-4 md:text-sm text-lg font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-8 md:py-4 md:text-sm text-lg font-medium text-gray-900 whitespace-nowrap">{user.age}</td>
                  <td className="px-6 py-8 md:py-4 md:text-sm text-lg font-medium text-gray-900 whitespace-nowrap">{user.status}</td>
                  <td className="px-6 py-8 md:py-4 md:text-sm text-lg font-medium text-gray-900 whitespace-nowrap">{user.cpf}</td>
                  <td className="px-6 py-8 md:py-4 md:text-sm text-lg font-medium text-gray-900 whitespace-nowrap">{user.city}</td>
                  <td className="px-6 py-8 md:py-4 md:text-sm text-lg font-medium text-gray-900 whitespace-nowrap">{user.state}</td>
                  <td className="px-6 py-8 md:py-4 md:text-sm text-lg font-medium text-blue-400 whitespace-nowrap">
                    <Link to={{
                      pathname: '/edit',
                      state: { data: user },
                    }}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <div className="flex items-center mx-5 my-4">
                <div className="flex items-center space-x-5">
                  <div className="w-1/2 mr-5">
                    {seeing > 5 ? (
                      <button
                        type="button"
                        className="bg-indigo-600 text-gray-200 rounded hover:bg-indigo-400 px-4 mr-4 py-2 focus:outline-none"
                        onClick={handlePrevius}
                      >
                        Previus
                      </button>
                    ) : ''}
                  </div>
                  <div className="w-1/2">
                    {seeing < size ? (
                      <button
                        type="button"
                        className="bg-indigo-600 text-gray-200 rounded hover:bg-indigo-400 px-4 py-2 focus:outline-none"
                        onClick={handleNext}
                      >
                        Next
                      </button>
                    ) : ''}
                  </div>
                </div>
              </div>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
