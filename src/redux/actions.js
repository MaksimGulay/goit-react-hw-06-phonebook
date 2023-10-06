// action.js
export const addContact = newContact => {
  return {
    type: 'contact/addContact',
    payload: newContact,
  };
};

export const deleteContact = contactToDelete => {
  return {
    type: 'contact/deleteContact',
    payload: contactToDelete,
  };
};

export const setFilter = filter => ({
  type: 'filter/setFilter',
  payload: filter,
});
