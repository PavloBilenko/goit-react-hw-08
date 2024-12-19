import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    phonename: '',
    phonenumber: '',
  };

  const validationSchema = Yup.object().shape({
    phonename: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phonenumber: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { phonename, phonenumber } = values;

    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === phonename.toLowerCase() ||
          contact.number === phonenumber,
      )
    ) {
      toast.error('Contact with this name or number already exists.');
      return;
    }

    dispatch(addContact({ name: phonename, number: phonenumber }))
      .unwrap()
      .then((newContact) => {
        toast.success(`Contact ${newContact.name} added successfully!`);
        resetForm();
      })
      .catch((error) => {
        toast.error('Error adding contact. Please try again.');
        console.error('Error adding contact:', error);
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
          <label className={s.formGroup}>
            <span className={s.text}>Name</span>
            <Field
              className={s.input}
              type="text"
              name="phonename"
              placeholder="Enter name"
            />
            <ErrorMessage
              name="phonename"
              component="div"
              className={s.error}
            />
          </label>
          <label className={s.formGroup}>
            <span className={s.text}>Number</span>
            <Field
              className={s.input}
              type="text"
              name="phonenumber"
              placeholder="Enter number"
            />
            <ErrorMessage
              name="phonenumber"
              component="div"
              className={s.error}
            />
          </label>
          <button type="submit" className={s.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
