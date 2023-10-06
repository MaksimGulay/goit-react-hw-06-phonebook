// selector.js
export const getFilteredContacts = state => {
  const { contacts, filter } = state;
  return contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.filter.toLowerCase())
  );
};
