/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';

import Api from '../firebase';

export default function EditForm({ userData }) {
  const [states, setStates] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [status, setStatus] = useState('Solteiro(a)');
  const [cpf, setCpf] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Acre');
  const [alertBad, setAlertBad] = useState(false);
  const [alertGood, setAlertGood] = useState(false);

  const history = useHistory();

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
    setAlertGood(false);
    setAlertBad(false);

    const setEdit = async () => {
      setAlertBad(false);
      setAlertGood(false);
      if (name !== '' && age !== '' && cpf !== '' && city !== '') {
        await Api.editPerson({
          personId:
          userData.id,
          personData: {
            name, age, status, cpf, city, state,
          },
        }).then(() => {
          setAlertGood(true);
        }).catch(() => {
          setAlertBad(true);
        });
      } else {
        setAlertBad(true);
      }
    };
    setEdit();
  };

  const handleDelete = () => {
    setAlertGood(false);
    setAlertBad(false);
    Api.deletePerson({ personId: userData.id }).then(() => {
      history.push('/');
      setAlertGood(true);
    }).catch(() => {
      setAlertBad(true);
    });
  };

  return (
    <div className={`bg-white md:w-2/3 md:mx-auto px-20 md:my-10 ${alertBad || alertGood ? 'pt-5' : ''}`}>
      <h1 className="text-3xl font-bold py-6 text-gray-700">Edit Form</h1>
      <hr className="-mx-20" />
      <div className="py-8">
        <div className="flex flex-col mb-6">
          <span className="text-2xl text-gray-700">Informações Pessoais</span>
          <span className="text-sm text-gray-400">Edite aqui os dados pessoais do usuário</span>
        </div>
        <div className="md:flex">
          <div className="md:w-2/3 md:pr-6">
            <label className="text-gray-600 font-light font-bold">Nome</label>
            <input
              type="text"
              className="w-full mt-2 mb-6 px-5 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="md:w-1/3">
            <label className="text-gray-600 font-light font-bold">Idade</label>
            <input
              type="number"
              className="w-full mt-2 mb-6 px-5 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-600"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-1/2 md:pr-5">
            <label className="text-gray-600 font-light font-bold">Estado Civil</label>
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
          <div className="md:w-1/2">
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
        <div className="md:flex">
          <div className="md:w-1/2 md:pr-5">
            <label className="text-gray-600 font-light font-bold">Cidade</label>
            <input
              type="text"
              className="w-full mt-2 mb-6 px-5 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-600"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="md:w-1/2">
            <label className="text-gray-600 font-light font-bold">Estado</label>
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
        <hr className="-mx-20" />
        {alertGood ? (
          <div className="bg-green-300 border-t-4 border-green-600 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div className="flex">
              <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
              <div>
                <p className="font-bold">Editado com sucesso!</p>
                <p className="text-sm">De uma olhada na tabela para conferir!</p>
              </div>
            </div>
          </div>
        ) : ''}
        {alertBad ? (
          <div className="bg-red-400 border-t-4 border-red-700 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div className="flex">
              <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
              <div>
                <p className="font-bold">Opa, parece que você esqueceu algo.</p>
                <p className="text-sm">Tenha certeza que preencheu todos os campos</p>
              </div>
            </div>
          </div>
        ) : ''}
        <div className="flex mt-3 space-x-5 w-full justify-end">
          <button
            type="button"
            className="bg-blue-300 text-indigo-600 rounded hover:bg-indigo-400 px-4 py-2 focus:outline-none"
            onClick={handleDelete}
          >
            Excluir Usuário
          </button>
          <button
            type="button"
            className="bg-indigo-600 text-gray-200 rounded hover:bg-indigo-400 px-4 py-2 focus:outline-none"
            onClick={handleEdit}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
