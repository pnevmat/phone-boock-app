import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({filter, state, foundContacts, onDeleteContact}) => (
  <ul className={styles.contactList}>
    {filter === '' ?
      state.map(contact => (
        <li className={styles.contact_item} key={contact._id}>
          <div className={styles.contact_item_container}>
            <div className={styles.contact_name_container}>
              <p className={styles.contact_name}>{contact.name}:</p>
              <p className={styles.contact_name}>{contact.email}</p>
              <p className={styles.contact_name}>{contact.phone}</p>
            </div>
            <button className={styles.contact_button} type="button" onClick={() => onDeleteContact(contact._id)}>Delete</button>
          </div>
        </li>
      )) :
      foundContacts.map(contact => (
        <li className={styles.contact_item} key={contact._id}>
          <div className={styles.contact_item_container}>
            <div className={styles.contact_name_container}>
              <p className={styles.contact_name}>{contact.name}:</p>
              <p className={styles.contact_name}>{contact.email}</p>
              <p className={styles.contact_name}>{contact.phone}</p>
            </div>
            <button className={styles.contact_button} type="button">Delete</button>
          </div>
        </li>
      ))
    }
  </ul>
);

ContactList.defaultProps = {
  avatar: {}
};

ContactList.propTypes = {
  foundContacts: PropTypes.arrayOf(
      PropTypes.object
  ),
  state: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;