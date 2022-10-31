import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrap, Title, MainTitle } from 'components/App/App.styled';

// const contacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // let contactId = nanoid();

  const hasContact = ({ name }) => {
    contacts.find(contact => contact.name.toLowerCase() === name);
  };

  const contactsHandleSubmit = data => {
    // if (hasContact)
    //   return Notiflix.Notify.failure(`${data.name} is already in contacts`);

    setContacts(prevContact => {
      const id = nanoid();
      const contact = [...data, id];
      return [...prevContact, contact];
    });
  };

  // resetForm();

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    if (!filter) return [...contacts];

    const contactToLowerCase = filter.toLowerCase();

    return [...contacts].filter(({ name }) =>
      name.toLowerCase().includes(contactToLowerCase)
    );
  };

  const onDeleteContact = id => {
    setContacts(prevContacts =>
      [...prevContacts].filter(contact => contact.id !== id)
    );
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  //   }
  // }

  return (
    <Wrap>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={contactsHandleSubmit} />
      <Title>Contacts</Title>
      <Filter filter={filter} onFilter={handleFilter} />
      <ContactList
        contacts={filterContacts}
        onDeleteContact={onDeleteContact}
      />
    </Wrap>
  );
};
