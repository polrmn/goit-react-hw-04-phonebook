import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form, Input, Button } from './AddNewContact.styled';

export default class AddNewContact extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  formSubmitHeandler = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.formSubmitHeandler}>
        <label htmlFor={this.nameInputId}>Name</label>
        <Input
          onChange={this.handleInputChange}
          value={this.state.name}
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <Input
          onChange={this.handleInputChange}
          value={this.state.number}
          id={this.numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

AddNewContact.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
