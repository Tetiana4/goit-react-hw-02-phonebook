import React, { Component } from 'react';
import Form from './Component/Form';

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

  render() {
    return (
      <>
        <Form propSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <label id={this.name}>
          <input type="text" value={this.state.filter} onChange={this.handleChange} name="filter" />
        </label>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default App;
