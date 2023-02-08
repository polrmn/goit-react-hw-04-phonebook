import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Input, Button } from './AddNewContact.styled';


const AddNewContact = ({onFormSubmit}) => {

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    onFormSubmit({name, number});
    setName('');
    setNumber('');
  };

 
  return (
    <Form onSubmit={formSubmitHandler}>
      <label htmlFor={nameInputId}>Name</label>
      <Input
        onChange={handleInputChange}
        value={name}
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberInputId}>Number</label>
      <Input
        onChange={handleInputChange}
        value={number}
        id={numberInputId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  )
}

AddNewContact.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default AddNewContact;