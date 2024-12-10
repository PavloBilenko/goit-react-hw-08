// src/components/Contact/Contact.jsx
import React from 'react';
import s from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.contact}>
      {name}: {number}
      <button className={s.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
