import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EditForm from '../../components/EditForm';

export default function Edit() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <EditForm userData={location.state.data} />
    </div>
  );
}
