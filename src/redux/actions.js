import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/AddContact", contact => {
    return {
        payload: {
            name: contact.name,
            number: contact.number,
            id: nanoid(),
        }
    }
})

export const deleteContact = createAction("contacts/DeleteContact")

export const filterContacts = createAction("filter/FilterContacts")