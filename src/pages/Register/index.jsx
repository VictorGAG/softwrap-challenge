import React from 'react';

import Navbar from '../../components/Navbar';
import RegisterComponent from '../../components/Register';

export default function Register() {
  return (
    <div>
      <Navbar room="register" />
      <RegisterComponent />
    </div>
  );
}
