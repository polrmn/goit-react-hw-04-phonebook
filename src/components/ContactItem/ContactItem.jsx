import PropTypes from 'prop-types';
import React from 'react';
import { ButtonDelete, Li } from './ContactItem.styled';

const ContactItem = ({ contact, onBtnClick }) => {
  const { id, name, number } = contact;
  return (
    <Li key={id}>
      {name}: {number}
      <ButtonDelete onClick={() => onBtnClick(id)} type="button">
        Delete
      </ButtonDelete>
    </Li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onBtnClick: PropTypes.func.isRequired
};

export default ContactItem;
