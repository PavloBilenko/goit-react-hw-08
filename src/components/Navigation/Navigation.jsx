// src/components/Navigation/Navigation.jsx
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Contacts
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Register
      </NavLink>
    </nav>
  );
};

export default Navigation;
