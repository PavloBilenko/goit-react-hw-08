import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from '../../redux/auth/operations';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import s from './LoginForm.module.css';

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

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts'); // Перенаправлення на сторінку контактів після логіну
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(LogIn(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`, {
          style: { backgroundColor: '#00ced1', fontWeight: 'bold' },
          iconTheme: { primary: 'white', secondary: 'black' },
        });
        resetForm();
      })
      .catch(() => {
        toast.error('Invalid login or password. Please try again.', {
          style: { backgroundColor: '#FFCCCC', fontWeight: 'bold' },
          iconTheme: { primary: 'white', secondary: 'red' },
        });
        resetForm();
      });
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            type="email"
            name="email"
            id={emailFieldId}
            className={s.input}
          />
          <ErrorMessage name="email" component="div" className={s.error} />
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            type="password"
            name="password"
            id={passwordFieldId}
            className={s.input}
          />
          <ErrorMessage name="password" component="div" className={s.error} />
          <button type="submit" className={s.button}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
