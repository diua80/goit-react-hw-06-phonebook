import { createSlice } from '@reduxjs/toolkit';

const filterInitState = {
    filter: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitState.filter,
    reducers: {
        filterContacts: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { filterContacts } = filterSlice.actions;

