import React from 'react';
import SideBar from '../Component/SideBar';
import { Navbar } from '../Component/Navbar';
import './vendorspage.css';
import SearchBar from '../Component/SearchBar';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Component/pages/Profile';


const VendorsPage = () => {
  return (
      <div className='V-screen'>
      <Navbar />
      <div className="main-content">
        <SideBar />
        <div className="content-area">
          <SearchBar />
          <Routes>
            <Route 
              path='profile'
              element= {<Profile/>}
              />
          </Routes>
        </div>
      </div>
    </div>
    
  )
}

export default VendorsPage