import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsInitState = {
    contacts: [],
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.contacts.push(action.payload);
            },
            prepare: (name, number) => {
                const id = nanoid();
                return { payload: { name, number, id } };
            },
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            );
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;