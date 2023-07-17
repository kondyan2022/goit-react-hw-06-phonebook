import UList from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/redux/selectors';
import { useEffect } from 'react';
import { LOCAL_STORAGE_KEY, delContact } from 'components/redux/contactsSlice';

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

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

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
