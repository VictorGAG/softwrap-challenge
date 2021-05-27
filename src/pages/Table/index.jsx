import React from 'react';
import Navbar from '../../components/Navbar';
import TableData from '../../components/Table';

export default function Table() {
  return (
    <>
      <Navbar room="table" />
      <TableData />
    </>
  );
}
