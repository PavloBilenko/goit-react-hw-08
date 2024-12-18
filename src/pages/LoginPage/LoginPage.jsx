import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please, enter the email'),
    password: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please, enter the password'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`, {
          style: { backgroundColor: '#00ced1', fontWeight: 'bold' },
          iconTheme: {
            primary: 'white',
            secondary: 'black',
          },
        });
        // Направляємо на сторінку контактів
        // navigate('/contacts');  // Для цього потрібен `useNavigate`
        resetForm();
      })
      .catch(() => {
        toast.error('Invalid login or password. Please try again.', {
          style: { backgroundColor: '#FFCCCC', fontWeight: 'bold' },
          iconTheme: {
            primary: 'white',
            secondary: 'red',
          },
        });
        resetForm();
      });
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="input"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="input"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit" className="button">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
