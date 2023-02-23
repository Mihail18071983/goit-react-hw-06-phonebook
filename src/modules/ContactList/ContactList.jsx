import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import ContactListStyled from './ContactList.styled';
// import { useSelector } from 'react-redux';



const ContactList = ({ onDeleteContact, visibleContacts }) => {
  return ( <ContactListStyled>
    {visibleContacts.map(({ id, name, number }) => {
      return (
        <Contact
          name={name}
          key={id}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      );
    })}
  </ContactListStyled>)
  // const contacts = useSelector(store => store.contacts);
  // console.log(contacts);
 
};

export default ContactList;

ContactList.defaultProps = {
    visibleContacts: []
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
