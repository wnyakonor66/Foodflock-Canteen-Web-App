import React from 'react';
import SideBar from '../Component/SideBar';
import { Navbar } from '../Component/Navbar';
import './vendorspage.css';
import { Outlet } from "react-router-dom";

const VendorsPage = () => {
  return (
     <div className="V-screen">
			<Navbar />
			<div className="main-content overflow-hidden">
				<SideBar />
				<div className="content-area">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
          

export default VendorsPage;
