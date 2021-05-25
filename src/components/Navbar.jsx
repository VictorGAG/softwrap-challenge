import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar() {
  return (
    <nav
      className="flex justify-between
      items-center h-16 bg-black font-bold
      text-white relative shadow-sm px-52"
      role="navigation"
    >
      <Link to="/" className="pl-8 ">TABLING</Link>
      <div className="px-4 cursor-pointer md:hidden">
        <MenuIcon />
      </div>
      <div className="pr-8 md:block hidden">
        <Link to="/" className="p-4">Table</Link>
        <Link to="/register" className="p-4">Register</Link>
      </div>
    </nav>
  );
}
