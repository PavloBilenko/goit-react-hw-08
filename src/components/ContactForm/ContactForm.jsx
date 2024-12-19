import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // Валідація
  const validationSchema = Yup.object().shape({
    phonename: Yup.string().min(3).max(50).required('Required'),
    phonenumber: Yup.string().min(3).max(50).required('Required'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Перевірка полів за валідаційною схемою
    const isValidName = validationSchema.fields.phonename.isValidSync(name);
    const isValidNumber =
      validationSchema.fields.phonenumber.isValidSync(number);

    if (!isValidName || !isValidNumber) {
      toast.error('Please fill out the form correctly.');
      return;
    }

    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number,
      )
    ) {
      toast.error('Contact with this name or number already exists.');
      return;
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then((newContact) => {
        toast.success(`Contact ${newContact.name} added successfully!`);
      })
      .catch((error) => {
        toast.error('Error adding contact. Please try again.');
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
