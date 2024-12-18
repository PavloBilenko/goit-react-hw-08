// src/components/LogoutButton/LogoutButton.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operation';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './LogoutButton.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <button className={s.button} onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
