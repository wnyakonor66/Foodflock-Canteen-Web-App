import React from 'react';
import './styles/searchbar.css';
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="search_screen">
      <div className='search'>
          <IoIosSearch size={25}/>
        <input type='text' placeholder='Search for Something' />
        <h3 className='search_title'>Welcome to Foodflock Canteen</h3>
      </div>
      
    </div>
  )
}

export default SearchBar