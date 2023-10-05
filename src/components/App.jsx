import { ContactForm } from './contact_form/ContactForm';
import { ContactList } from './contact_list/ContactList';
import { Filter } from './filter/Filter';
import { Heading1, Heading2 } from './app-style';
// import { useEffect, useState } from 'react';
// import { MyComponent } from './MyComponent';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts'))
  // );
  // const [filter, setFilter] = useState('');
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addNewContact = newContact => {
  //   const existingContact = contacts.find(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );
  //   if (existingContact) {
  //     alert(`"${existingContact.name}" is already in contacts.`);
  //   } else {
  //     setContacts(prevContacts => [...prevContacts, newContact]);
  //   }
  // };

  // const deleteContact = contactToDelete => {
  //   const updatedContacts = contacts.filter(
  //     contact => contact.id !== contactToDelete.id
  //   );
  //   setContacts(updatedContacts);
  // };

  // const handleFilterChange = event => {
  //   setFilter(event.target.value);
  // };

  // const getFilteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const filteredContacts = getFilteredContacts();
  return (
    <div>
      <Heading1>Phonebook</Heading1>
      <ContactForm
      // addNewContact={addNewContact}
      />

      <Heading2>Contacts</Heading2>
      <Filter
      // handleFilterChange={handleFilterChange} filter={filter}
      />
      <ContactList
      // filteredContacts={filteredContacts}
      // onDeleteContact={deleteContact}
      />
      {/* <MyComponent /> */}
    </div>
  );
};
