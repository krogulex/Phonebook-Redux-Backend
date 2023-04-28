import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts } from './operations';
import { addContact } from './operations';
import { deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isAdding: false,
    error: null,
  },
  extraReducers: {
    //pending
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [addContact.pending](state) {
      state.isAdding = true;
    },
    [deleteContact.pending](state) {},
    // rejected
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.rejected](state, action) {
      state.isAdding = false;
      state.error = action.payload;
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
    },
    //fulfilled
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isAdding = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
