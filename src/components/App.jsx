import { nanoid } from "nanoid";
import { Component } from "react";
import AddNewContact from './AddNewContact/AddNewContact';
import FilterContacts from "./FilterContacts/FilterContacts";
import ContactsList from "./ContactsList/ContactsList";
import { Title } from "./App.styled";

export class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  };
  
  componentDidMount() {
    const contacsFromLS = JSON.parse(localStorage.getItem('userContacts'));
    if (contacsFromLS) {
      this.setState({ contacts: contacsFromLS });
    }
  }

  componentDidUpdate() {
    if (this.state.contacts.length !== 0){
      localStorage.setItem('userContacts', JSON.stringify(this.state.contacts));
      return
    }
      localStorage.removeItem('userContacts'); 
  }

  handleFormSubmit = ({name, number}) => {
    const alreadyInContacts = this.state.contacts.find(contact=>contact.name===name)
    if (alreadyInContacts) {
      alert(`${alreadyInContacts.name} is already in contacts.`);
      return
    }
    const newContact = {
      name,
      number,
      id: nanoid()
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

  };

  handleFilterInputChange = event => {
    this.setState({filter: event.target.value})
  }

  handleDeleteBtnClick = (id) => {
    this.setState(()=>{
      return {...this.state, contacts: this.state.contacts.filter(element=>element.id!==id)}
    })
  }

  filterContacts = () => this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  

  render() {
    return (
      <>
        <AddNewContact onFormSubmit={this.handleFormSubmit} />
        {this.state.contacts.length > 0 && <Title>Contacts</Title>}
        {this.state.contacts.length > 1 && (
          <FilterContacts
            onInputChange={this.handleFilterInputChange}
            value={this.state.filter}
          />
        )}
        {this.filterContacts().length > 0 && (
          <ContactsList
            filterContacts={this.filterContacts()}
            onDeleteBtnClick={this.handleDeleteBtnClick}
          />
        )}
      </>
    );
  }
}
