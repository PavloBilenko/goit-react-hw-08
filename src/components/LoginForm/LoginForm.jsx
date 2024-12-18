// import s from "./LoginForm.module.css";
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};
export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="email" name="email" id={emailFieldId} />
          <label htmlFor={passwordFieldId}>Password</label>
          <Field type="password" name="password" id={passwordFieldId} />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
