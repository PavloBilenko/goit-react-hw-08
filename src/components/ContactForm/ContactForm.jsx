import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/contactsOps'; // Правильний імпорт
import { selectContacts } from '../../redux/contacnts/selectors'; // Імпортуємо селектор коректно
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then((newContact) => {
        console.log('Contact added successfully:', newContact);
      })
      .catch((error) => {
        console.error('Error adding contact:', error);
      });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.formGroup}>
        Name
        <input
          className={s.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className={s.formGroup}>
        Number
        <input
          className={s.input}
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
