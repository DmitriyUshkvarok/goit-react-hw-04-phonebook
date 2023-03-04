import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const repeatCheck = newName => {
    return contacts.find(({ name }) => name === newName);
  };

  const addContact = ({ name, number }) => {
    if (!repeatCheck(name)) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts(prevContacts => [contact, ...prevContacts]);
      return;
    }
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const setFilterValue = e => {
    setFilter(e.currentTarget.value.trim());
  };

  const getResultSearch = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  return (
    <>
      <ContactForm onSubmit={addContact} />
      <Filter name={filter} onChange={setFilterValue} />
      {contacts[0] && getResultSearch()[0] ? (
        <ContactList
          contacts={getResultSearch()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p className={css.filterInfo}>There’s nothing here yet...</p>
      )}
    </>
  );
}

export default App;
