export const getFilteredContacts = state => {
  return state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
};
