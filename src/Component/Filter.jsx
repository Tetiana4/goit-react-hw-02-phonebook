import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    <input type="text" value={value} onChange={onChange} />
  </label>
);
export default Filter;

// <label id={this.name}>  06
