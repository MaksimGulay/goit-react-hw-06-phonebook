import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  contacts: [
    { id: 1, name: 'Іван', number: '123456789' },
    { id: 2, name: 'Марія', number: '987654321' },
    { id: 3, name: 'Петро', number: '555555555' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
      const existingContact = state.contacts.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (existingContact) {
        alert(`"${existingContact.name}" is already in contacts.`);
        return state;
      } else {
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      }
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.id
        ),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
