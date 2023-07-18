import UList from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { delContact } from 'redux/contactsSlice';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const contactList = () =>
    filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    <UList>
      {contactList().map(({ id, name, number }) => (
        <li key={id}>
          {`${name}: ${number}`}
          <button
            type="submit"
            onClick={() => {
              dispatch(delContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </UList>
  );
};

export default ContactList;
