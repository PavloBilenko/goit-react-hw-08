// src/components/AuthNav/AuthNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink to="/register" className={s.link}>
      Register
    </NavLink>
    <NavLink to="/login" className={s.link}>
      Login
    </NavLink>
  </div>
);

export default AuthNav;
