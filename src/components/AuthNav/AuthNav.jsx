import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={s.auth}>
      <NavLink className={s.nav} to="/register">
        Register
      </NavLink>
      <NavLink className={s.nav} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
