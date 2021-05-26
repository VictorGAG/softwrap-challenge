/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

import Api from '../firebase';

export default function EditForm({ userData }) {
  const [states, setStates] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [status, setStatus] = useState('Solteiro(a)');
  const [cpf, setCpf] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Acre');
  // const [alertBad, setAlertBad] = useState(false);
  // const [alertGood, setAlertGood] = useState(false);

  useEffect(() => {
    setStates([
      { name: 'Acre' },
      { name: 'Alagoas' },
      { name: 'Amapá' },
      { name: 'Amazonas' },
      { name: 'Bahia' },
      { name: 'Ceará' },
      { name: 'Espírito Santo' },
      { name: 'Goiás' },
      { name: 'Maranhão' },
      { name: 'Mato Grosso' },
      { name: 'Mato Grosso do Sul' },
      { name: 'Minas Gerais' },
      { name: 'Pará' },
      { name: 'Paraíba' },
      { name: 'Paraná' },
      { name: 'Pernambuco' },
      { name: 'Piauí' },
      { name: 'Rio de Janeiro' },
      { name: 'Rio Grande do Norte' },
      { name: 'Rio Grande do Sul' },
      { name: 'Rondônia' },
      { name: 'Roraima' },
      { name: 'Santa Catarina' },
      { name: 'São Paulo' },
      { name: 'Sergipe' },
      { name: 'Tocantins' },
      { name: 'Destrito Federal' },
    ]);

    const getData = () => {
      setName(userData.name);
      setAge(userData.age);
      setStatus(userData.status);
      setCpf(userData.cpf);
      setCity(userData.city);
      setState(userData.state);
    };
    getData();
  }, []);

  const handleEdit = () => {
    const setEdit = async () => {
      await Api.editPerson({
        personId:
        userData.id,
        personData: {
          name, age, status, cpf, city, state,
        },
      }).then(() => {
        console.log('tudo certo');
      }).catch((e) => {
        console.log(e);
      });
    };
    setEdit();
  };

  const handleDelete = () => {
    Api.deletePerson({ personId: userData.id }).then(() => {
      console.log('tudo certo');
    }).catch((e) => {
      console.log(e);
    });
  };

  return (
    <div className="bg-white w-2/3 mx-auto px-20 my-10">
      <h1 className="text-2xl py-6 text-gray-700">Edit Form</h1>
      <hr className="-mx-20" />
      <div className="py-8">
        <div className="flex flex-col mb-6">
          <span className="text-x1 text-gray-700">Personal Information</span>
          <span className="text-sm text-gray-500">Add here the new user information</span>
        </div>
        <div className="flex">
          <div className="w-2/3 pr-6">
            <label className="text-gray-600 font-light font-bold">Name</label>
            <input
              type="text"
              className="w-full mt-2 mb-6 px-5 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-1/3">
            <label className="text-gray-600 font-light font-bold">Age</label>
            <input
              type="number"
              className="w-full mt-2 mb-6 px-5 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-600"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-5">
            <label className="text-gray-600 font-light font-bold">Status</label>
            <select
              className="w-full mt-2 mb-6 h-11 border bg-white rounded-lg px-5 py-2 focus:outline-none focus:border-indigo-600"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option className="py-1">Solteiro(a)</option>
              <option className="py-1">Casado(a)</option>
              <option className="py-1">Divorciado(a)</option>
              <option className="py-1">Viúvo(a)</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="text-gray-600 font-light font-bold">CPF</label>
            <InputMask
              mask="999.999.999-99"
              className="w-full mt-2 mb-6 px-5 py-2
              border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-600"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-5">
            <label className="text-gray-600 font-light font-bold">City</label>
            <input
              type="text"
              className="w-full mt-2 mb-6 px-5 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-600"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="w-1/2">
            <label className="text-gray-600 font-light font-bold">State</label>
            <select
              className="w-full mt-2 mb-6 h-11 border bg-white rounded-lg px-5 py-2 focus:outline-none focus:border-indigo-600"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {states.map((e) => (
                <option className="py-1">{e.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <button
            type="button"
            className="bg-blue-300 text-indigo-600 rounded hover:bg-indigo-400 px-4 py-2 mr-5 focus:outline-none"
            onClick={handleDelete}
          >
            Exclude Person
          </button>
          <button
            type="button"
            className="bg-indigo-600 text-gray-200 rounded hover:bg-indigo-400 px-4 py-2 focus:outline-none"
            onClick={handleEdit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
