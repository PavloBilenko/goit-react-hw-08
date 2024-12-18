import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={s.contact}>
      <span>
        {name}: {number}
      </span>
      <button className={s.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
