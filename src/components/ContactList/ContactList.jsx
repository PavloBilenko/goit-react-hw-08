import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import s from './ContactList.module.css';

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.list}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id} className={s.item}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
