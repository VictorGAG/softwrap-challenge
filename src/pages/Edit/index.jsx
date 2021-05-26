import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EditForm from '../../components/EditForm';

export default function Edit() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <div className="bg-white h-14 text-black text-2xl font-bold flex items-center pl-72 mb-10">Edit Register</div>
      <EditForm userData={location.state.data} />
    </div>
  );
}
