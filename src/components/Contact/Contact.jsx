import { FaUser, FaPhone } from 'react-icons/fa';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast'; // Імпорт функції toast

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contact.id))
      .then(() => {
        // Відображення успішного повідомлення
        toast.success(`Contact "${contact.name}" was deleted successfully!`);
      })
      .catch((error) => {
        // Відображення повідомлення про помилку
        toast.error(`Failed to delete contact: ${error.message}`);
      });
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.contact}>
          <p className={s.text_name}>
            <FaUser className={s.icon} />
            {contact.name}:
          </p>
          <p className={s.text_number}>
            <FaPhone className={s.icon} />
            {contact.number}
          </p>
        </div>

        <button type="button" className={s.button} onClick={handleClick}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Contact;
