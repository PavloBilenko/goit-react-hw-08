// src/redux/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;

// Селектор для отримання значення фільтра
export const selectNameFilter = (state) => state.filters.name;

// Мемоізований селектор для фільтрації контактів
export const selectFilteredContacts = createSelector(
  (state) => state.contacts.items,
  selectNameFilter,
  (contacts, nameFilter) => {
    if (!nameFilter) return contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase()),
    );
  },
);

export default filtersSlice.reducer;
