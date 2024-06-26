import React from 'react';
import { Link } from 'react-router-dom';


import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <div>
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
   
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
 </div>
);

export default Navbar;
