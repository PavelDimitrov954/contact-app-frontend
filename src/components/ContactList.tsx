import React, { useEffect, useState } from 'react';
import api from '../api';
import ContactForm from './ContactForm';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filter, setFilter] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>(undefined);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.get('/contacts', {
          params: { filter },
        });
        setContacts(response.data);
        setError(null); // Reset error if successful
      } catch (error) {
        setError('Failed to load contacts. Please try again.');
        console.error('Fetch contacts failed:', error);
      }
    };
    fetchContacts();
  }, [filter]);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/contacts/${id}`);
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      setError('Failed to delete contact. Please try again.');
      console.error('Delete contact failed:', error);
    }
  };

  const handleSave = () => {
    console.log('handleSave invoked');
    setSelectedContact(undefined);
    setIsAdding(false);
    const fetchContacts = async () => {
      const response = await api.get('/contacts', {
        params: { filter },
      });
      setContacts(response.data);
    };
    fetchContacts();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter contacts"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} - {contact.phoneNumber} - {contact.emailAddress}
            <button onClick={() => setSelectedContact(contact)}>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsAdding(true)}>Add Contact</button>
      {isAdding && <ContactForm onSave={handleSave} />}
      {selectedContact && <ContactForm contact={selectedContact} onSave={handleSave} />}
    </div>
  );
};

export default ContactList;
