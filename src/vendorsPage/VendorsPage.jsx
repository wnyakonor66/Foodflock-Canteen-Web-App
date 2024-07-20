import React from 'react';
import SideBar from '../Component/SideBar';
import { Navbar } from '../Component/Navbar';
import './vendorspage.css';
import SearchBar from '../Component/SearchBar';

const VendorsPage = () => {
  return (
      <div className='V-screen'>
      <Navbar />
      <div className="main-content">
        <SideBar />
        <div className="content-area">
          <SearchBar />
        </div>
      </div>
    </div>
    
  )
}

export default VendorsPage