import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../assets/variables/colors';

function SearchInput(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='d-flex align-items-center rounded-1 px-3 py-2' style={{ backgroundColor: colors.secondary, color: colors.input }}>
            <FontAwesomeIcon icon={faSearch} />
            <input
                type="text"
                placeholder={props.text}
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    </form>
  );
}

export default SearchInput;