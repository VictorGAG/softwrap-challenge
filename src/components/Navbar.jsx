/* eslint-disable react/destructuring-assignment */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function Navbar(room) {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div>
      <nav
        className="bg-gray-800 font-bold
        text-white relative shadow-lg mb-3"
        role="navigation"
      >
        <div className="flex justify-center w-full py-5">
          <div className="w-3/4">
            <div className="flex align-center space-x-3 md:flex hidden">
              <Link to="/register" className={`block py-2 px-4 text-base rounded-lg ${room.room === 'register' ? 'bg-gray-900' : ''} uppercase`}>registro</Link>
              <Link to="/" className={`block py-2 px-4 text-base rounded-lg ${room.room === 'table' ? 'bg-gray-900' : ''} uppercase`}>tabela</Link>
            </div>
          </div>
          <div className="md:hidden flex">
            {menuShow ? (
              <button type="button" onClick={() => setMenuShow(!menuShow)}>
                <CloseIcon />
              </button>
            ) : (
              <button type="button" onClick={() => setMenuShow(!menuShow)}>
                <MenuIcon />
              </button>
            )}
          </div>
        </div>

        <div className={menuShow ? '' : ' hidden'}>
          <div className="md:hidden ml-8">
            <Link to="/register" className="block py-2 px-4 text-sm hover:bg-gray-900 uppercase">registro</Link>
            <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-900 uppercase">tabela</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
