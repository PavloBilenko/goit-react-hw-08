// src/components/SearchBox/SearchBox.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNameFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const nameFilter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setNameFilter(event.target.value));
  };

  return (
    <div className={s.searchBox}>
      <input
        className={s.input}
        type="text"
        value={nameFilter}
        onChange={handleInputChange}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

export default SearchBox;
