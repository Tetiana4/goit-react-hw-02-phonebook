import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from './ContactList.styled';

function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button onClick={() => onDelete(id)}>delete</Button>
        </li>
      ))}
    </List>
  );
}
export default ContactList;

ContactList.propeTypes = {
  contact: PropTypes.array,
  onDelete: PropTypes.func,
};
