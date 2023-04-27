import { addContact, deleteContact, filterContacts } from './actions';
import { createReducer } from '@reduxjs/toolkit';

    
const contactsInitialState = [];

const filterInitialState = ''


const dataLocalStorage = JSON.parse(localStorage.getItem('contacts'));

if (dataLocalStorage) {
  contactsInitialState.push(...dataLocalStorage)
}

const handleLocalStorage = (state) => {
    const contactsStringified = JSON.stringify(state);
    localStorage.setItem('contacts', contactsStringified);
}

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
    handleLocalStorage(state)
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contacts => contacts.id === action.payload);
    state.splice(index, 1);
    handleLocalStorage(state)
  },
});

export const filterReducer = createReducer(filterInitialState, {
    [filterContacts]: (state, action) => {
      return  action.payload
    },
  });
  

