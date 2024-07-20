import React from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';



export const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/' className='title'>FoodFlock Canteen</Link>
    </nav>
  )
}