import { createSlice } from '@reduxjs/toolkit';

export const LOCAL_STORAGE_KEY = 'contacts';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]'),
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    delContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
