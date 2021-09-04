import React from 'react';

function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDelete(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
export default ContactList;
