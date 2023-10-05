export const addContact = newContact => {
  return {
    type: 'contact/addContact',
    payload: newContact,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contact/deleteContact',
    payload: contactId,
  };
};

export const setFilter = filter => ({
  type: 'filter/setFilter',
  payload: filter,
});
