// selector.js
export const getFilteredContacts = state => {
  const { contacts, filter } = state;
  const filterText = filter.filter.toLowerCase().trim(); // Додав .trim() для вилучення зайвих пробілів.

  if (!filterText) {
    return contacts.contacts; // Повертає всі контакти, якщо фільтр порожній.
  }

  return contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterText)
  );
};
