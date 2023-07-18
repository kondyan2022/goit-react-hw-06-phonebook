import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const LOCAL_STORAGE_KEY = 'root';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push({ ...action.payload, id: nanoid() });
    },
    delContact(state, action) {
      return {
        contacts: state.contacts.filter(({ id }) => id !== action.payload),
      };
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
const persistConfig = {
  key: LOCAL_STORAGE_KEY,
  storage,
};

export const persistContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
