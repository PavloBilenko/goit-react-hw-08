import { FaUser, FaPhone } from 'react-icons/fa';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <div className={s.item}>
        <p className={s.text_name}>
          <FaUser className={s.icon} />
          {contact.name}:
        </p>
        <p className={s.text_number}>
          <FaPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button type="button" className={s.btn} onClick={handleClick}>
        Delete
      </button>
    </>
  );
}
export default Contact;
