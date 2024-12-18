// import s from "./RegistrationForm.module.css";
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';
const initialValues = {
  name: '',
  email: '',
  password: '',
};
function RegisterForm() {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();
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
          <Field type="password" name="password" is={passwordFieldId} />
          <button type="submit">Register</button>
        </Form>
      </Formik>{' '}
    </div>
  );
}
export default RegisterForm;
