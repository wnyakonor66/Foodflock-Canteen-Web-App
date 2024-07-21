import React from 'react';
import { SideBarData } from './SideBarData';
import './styles/sidebar.css';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className='Sidebar'>
       <ul className='SidebarList'>
            {SideBarData.map((val,key) => {
            return (
                <li 
                    key={key} 
                    className='row'
                    id={window.location.pathname === val.link ? "active" : ""}
                    onClick={()=>(window.location.pathname = val.link)}>
                      <Link to={val.link} className="row-link">
                        <div id='icon'>{val.icon}</div>
                        <div id='title'>{val.title}</div>
                      </Link>  
                </li>
        )
        })}
      </ul> 
      
    </div>
  )
}

export default SideBar