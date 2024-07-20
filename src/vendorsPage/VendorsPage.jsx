import React from 'react';
import SideBar from '../Component/SideBar';
import { Navbar } from '../Component/Navbar';
import './vendorspage.css';


const VendorsPage = () => {
  return (
    <div className='V-screen'>
        <Navbar /> 
        <SideBar />
    </div>
  )
}

export default VendorsPage