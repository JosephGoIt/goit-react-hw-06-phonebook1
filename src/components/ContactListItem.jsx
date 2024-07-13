import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li className={css.contactListItem}>
      <p>{contact.name}</p>
      <p className={css.contactAlign}>{contact.number}</p>
      <button className={css.btnDelete} onClick={handleDelete}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
