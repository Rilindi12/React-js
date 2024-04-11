import React, {useState} from 'react';
import { shopData } from '../data/shopData';
import './searchbar.css';

export default function SearchBar ({applyFilters}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const {value} = event.target;
    setSearchTerm(value);
    filterItems(value);
    };

    const filterItems = (searchTerm) => {
      const filteredItems = shopData.filter((item) => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      applyFilters(filteredItems)
    };

    return (
      <div className='search-bar-container'>
      <input
        className='search-bar-input'
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
    )
}