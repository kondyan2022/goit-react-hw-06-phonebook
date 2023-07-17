import { useState } from 'react';
import { nanoid } from 'nanoid';
import AddForm from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.some(({ name: cname }) => cname === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name: name, number: number, id: nanoid() }));
    // onSubmit({ name: name, number: number, id: id });
    reset();
  };

  return (
    <AddForm onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </AddForm>
  );
};
// ContactForm.propTypes = { onSubmit: PropTypes.func };

export default ContactForm;
