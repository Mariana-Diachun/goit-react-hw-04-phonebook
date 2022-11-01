import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrap, Title, MainTitle } from 'components/App/App.styled';
import { getItem } from 'utils/localStorage';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(getItem());

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const hasContact = ({ name }) => {
    contacts.find(contact => contact.name.toLowerCase() === name);
  };

  const contactsHandleSubmit = (data, { resetForm }) => {
    if (!hasContact)
      return Notiflix.Notify.failure(`${data.name} is already in contacts`);

    setContacts(prevContact => {
      const id = nanoid();
      const contact = { ...data, id };
      return [...prevContact, contact];
    });
    resetForm();
  };

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
