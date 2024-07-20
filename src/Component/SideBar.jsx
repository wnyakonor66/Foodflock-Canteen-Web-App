import React from 'react';
import { SideBarData } from './SideBarData';
import './styles/sidebar.css';

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
                        
                        <div id='icon'>{val.icon}</div>
                        <div id='title'>{val.title}</div>
                </li>
        )
        })}
      </ul> 
    </div>
  )
}

export default SideBar