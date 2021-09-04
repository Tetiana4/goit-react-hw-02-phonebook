import React, { Component } from 'react';
import ContactForm from './Component/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Component/Filter';
import ContactList from './Component/ContactList';
// import ContactList from './Component/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  handleChange = event => {
    const { filter, value } = event.currentTarget;

    this.setState({
      [filter]: value,
    });
  };

  addContact = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleList = () => {
    const { filter, contacts } = this.state;
    const normalisedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalisedFilter));
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm propSubmit={this.addContact} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={this.getVisibleList()} onDelete={this.deleteContacts} />
      </div>
    );
  }
}
export default App;
