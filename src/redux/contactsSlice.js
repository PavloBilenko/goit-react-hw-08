// src/redux/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload,
        );
      });
  },
});

// Додаємо селектор для фільтрації контактів
export const selectFilteredContacts = (state) => {
  const nameFilter = state.filters.name;
  const contacts = state.contacts.items;

  if (!nameFilter) {
    return contacts; // Якщо немає фільтра, повертаємо всі контакти
  }

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase()),
  );
};

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export default contactsSlice.reducer;
