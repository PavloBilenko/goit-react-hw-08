import { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field type="text" name="name" id={nameFieldId} />
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="email" name="email" id={emailFieldId} />
          <label htmlFor={passwordFieldId}>Password</label>
          <Field type="password" name="password" id={passwordFieldId} />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm;
