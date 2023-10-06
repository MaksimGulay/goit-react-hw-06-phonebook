// reducer.js
// import { combineReducers } from 'redux';

const contactInitialState = {
  contacts: [
    { id: 1, name: 'Іван', number: '123456789' },
    { id: 2, name: 'Марія', number: '987654321' },
    { id: 3, name: 'Петро', number: '555555555' },
  ],
};

export const contactsReducers = (state = contactInitialState, action) => {
  switch (action.type) {
    case 'contact/addContact':
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
    // case 'contacts/deleteContact':
    //   return state.filter(contact => contact.id !== action.payload.id);
    case 'contact/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const filterInitialState = {
  filter: '',
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

// export const rootReducer = combineReducers({
//   contacts: contactsReducers,
//   filter: filterReducer,
// });
