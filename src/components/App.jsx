import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import AddNewContact from './AddNewContact/AddNewContact';
import ContactsList from "./ContactsList/ContactsList";
import { Title } from "./App.styled";
import FilterContacts from "./FilterContacts/FilterContacts";


const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacsFromLS = JSON.parse(localStorage.getItem('userContacts'));
    if (contacsFromLS) {
      setContacts(contacsFromLS);
    }
  },[])
  
  useEffect(() => {
    if (contacts.length !== 0){
      localStorage.setItem('userContacts', JSON.stringify(contacts));
      return;
    }
      localStorage.removeItem('userContacts'); 
  },[contacts]);
  
  const handleFormSubmit = ({name, number}) => {
    const alreadyInContacts = contacts.find(contact=>contact.name === name)

    if (alreadyInContacts) {
      alert(`${alreadyInContacts.name} is already in contacts.`);
      return
    }

    const newContact = {
      name,
      number,
      id: nanoid()
    };

    setContacts(state=>[...state, newContact])
  };

  const handleFilterInputChange = event => {
    setFilter(event.target.value)
  }

  const handleDeleteBtnClick = (id) => {
    setContacts(state => state.filter(element=>element.id!==id))
  }

  const filterContacts = () => contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <>
      <AddNewContact onFormSubmit={handleFormSubmit} />
      {contacts.length > 0 && <Title>Contacts</Title>}
      {contacts.length > 1 && (
        <FilterContacts
          onInputChange={handleFilterInputChange}
          value={filter}
        />
      )}
      {filterContacts().length > 0 && (
        <ContactsList
          filterContacts={filterContacts()}
          onDeleteBtnClick={handleDeleteBtnClick}
        />
      )}
    </>
  );
}

export default App;
