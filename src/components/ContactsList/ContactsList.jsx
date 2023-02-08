import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { Ul } from './ContactsList.styled';

const ContactsList = ({ filterContacts, onDeleteBtnClick }) => {
  return (
    <Ul>
      {filterContacts.map(
        contact =>
            <ContactItem
              key={contact.id}
              contact={contact}
              onBtnClick={onDeleteBtnClick}
            />
      )}
    </Ul>
  );
};

ContactsList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteBtnClick: PropTypes.func
};

export default ContactsList;
