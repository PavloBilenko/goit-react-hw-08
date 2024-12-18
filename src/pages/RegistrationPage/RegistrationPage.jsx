import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import './RegistrationPage.module.css';

Modal.setAppElement('#root'); // Встановлення для доступності

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please, enter your name'),
    email: Yup.string()
      .email('Invalid email address')
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please, enter the email'),
    password: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please, enter the password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please, confirm your password'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast.success(`Registration successful! Welcome, ${res.user.name}!`);
        setModalMessage(`Welcome, ${res.user.name}!`);
        setIsModalOpen(true);
        resetForm();
      })
      .catch(() => {
        toast.error('This account already exists. Please try logging in.');
        setModalMessage('This account already exists. Please try logging in.');
        setIsModalOpen(true);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className="input"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
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
          <div>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>
          <button type="submit" className="button">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
