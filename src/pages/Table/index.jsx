import React from 'react';
import Navbar from '../../components/Navbar';
import TableData from '../../components/Table';

export default function Table() {
  return (
    <>
      <Navbar />
      <div className="bg-white h-14 text-black text-2xl font-bold flex items-center pl-72 mb-10">View registered</div>
      <TableData />
    </>
  );
}
