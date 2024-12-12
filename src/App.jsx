// src/App.jsx
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operation';
import { selectIsRefreshing } from './redux/auth/selectors';

import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegistrationPage/RegistrationPage';
// import DashboardPage from './pages/DashboardPage';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={<RestrictedRoute component={RegisterPage} redirectTo="/dashboard" />}
      />
      <Route
        path="/login"
        element={<RestrictedRoute component={LoginPage} redirectTo="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute component={DashboardPage} redirectTo="/login" />}
      />
    </Routes>
  );
};

export default App;
