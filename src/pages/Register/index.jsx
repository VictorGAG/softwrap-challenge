import React from 'react';

import Navbar from '../../components/Navbar';
import RegisterComponent from '../../components/Register';

export default function Register() {
  return (
    <div>
      <Navbar />
      <div className="bg-white h-14 text-black text-2xl font-bold flex items-center pl-72 mb-10">View registered</div>
      <RegisterComponent />
    </div>
  );
}
