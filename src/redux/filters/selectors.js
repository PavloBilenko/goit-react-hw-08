import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFilter = (state) => state.filters.search;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filters, contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase()),
    );
  },
);
