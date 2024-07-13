import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { store, persistor } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Section title="Phonebook">
            <ContactForm />
          </Section>
          <Section title="Contacts">
            <Filter />
            <ContactList />
          </Section>
        </div>
      </PersistGate>
    </Provider>
  );
};
