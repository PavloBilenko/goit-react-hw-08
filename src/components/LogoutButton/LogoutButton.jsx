// src/components/LogoutButton/LogoutButton.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations'; // Імпортуємо logOut
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import s from './LogoutButton.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/'); // Перенаправляємо на домашню сторінку, коли користувач більше не залогінений
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = async () => {
    await dispatch(logOut()); // Викликаємо логаут
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
