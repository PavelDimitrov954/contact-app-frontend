import React, { useState, useEffect } from 'react';
import api from '../api';
import { Contact } from './ContactList';

interface ContactFormProps {
  contact?: Contact;
  onSave: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onSave }) => {
  const [formState, setFormState] = useState<Contact>({
    id: contact?.id || 0,
    firstName: contact?.firstName || '',
    lastName: contact?.lastName || '',
    phoneNumber: contact?.phoneNumber || '',
    emailAddress: contact?.emailAddress || '',
  });

  useEffect(() => {
    if (contact) {
      setFormState(contact);
    } else {
      setFormState({
        id: 0,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: ''
      });
    }
  }, [contact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with state:', formState);
    try {
      const { id, ...contactData } = formState; // Omit id for new contact
      if (formState.id && formState.id !== 0) {
        console.log('Updating contact:', formState);
        await api.put(`/contacts/${formState.id}`, contactData);
      } else {
        console.log('Creating new contact:', formState);
        await api.post('/contacts', contactData);
      }
      onSave();
    } catch (error) {
      console.error('Failed to save contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={formState.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={formState.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="phoneNumber"
        value={formState.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        name="emailAddress"
        value={formState.emailAddress}
        onChange={handleChange}
        placeholder="Email Address"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ContactForm;
