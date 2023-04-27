import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const dataLocalStorage = JSON.parse(localStorage.getItem('contacts'));

if (dataLocalStorage) {
  contactsInitialState.push(...dataLocalStorage);
}

const handleLocalStorage = state => {
  const contactsStringified = JSON.stringify(state);
  localStorage.setItem('contacts', contactsStringified);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        handleLocalStorage(state);
      },
      prepare(contact) {
        return {
          payload: {
            name: contact.name,
            number: contact.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
      handleLocalStorage(state);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
