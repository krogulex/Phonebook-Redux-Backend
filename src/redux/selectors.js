export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectIsAdding = state => state.contacts.isAdding;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const allContacts = selectContacts(state);
  const filter = selectFilter(state);

  const filteredContacts = allContacts.filter(f =>
    f.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts;
};