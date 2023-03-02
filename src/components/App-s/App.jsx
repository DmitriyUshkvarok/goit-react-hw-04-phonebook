import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (!this.repeatCheck(name)) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
      return;
    }
  };

  repeatCheck = newName => {
    return this.state.contacts.find(({ name }) => name === newName);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getResultSearch = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  setFilterValue = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  render() {
    const { filter } = this.state;
    const resultSearch = this.getResultSearch();
    return (
      <>
        <ContactForm onSubmit={this.addContact} />
        <Filter name={filter} onChange={this.setFilterValue} />
        {this.state.contacts[0] && resultSearch[0] ? (
          <ContactList
            contacts={resultSearch}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <p className={css.filterInfo}>There’s nothing here yet...</p>
        )}
      </>
    );
  }
}

export default App;
