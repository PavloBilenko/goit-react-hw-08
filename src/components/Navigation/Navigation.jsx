import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.text} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          {isLoggedIn && (
            <NavLink className={s.text} to="/contacts">
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
