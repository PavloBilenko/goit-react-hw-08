// src/components/ContactList/ContactList.jsx
import React, { useEffect } from 'react';
import Contact from '../Contact/Contact';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contactsOps';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContact(id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
