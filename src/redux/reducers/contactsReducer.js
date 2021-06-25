import {createReducer} from '@reduxjs/toolkit';

import storeUpdate from '../actions/ContactPageActions/didMountStoreUpdate';
import addContact from '../actions/ContactPageActions/addContact';
import deleteContact from '../actions/ContactPageActions/deleteContact';
const contactsReducer = createReducer([], {
    [storeUpdate.updateStoreSuccess]: (_, {payload}) => [...payload],
    [addContact.addContactSuccess]: (state, {payload}) => [...state, payload.data],
    [deleteContact.deleteContactSuccess]: (state, {payload}) => state.filter(contact => contact._id !== payload)
});

export default contactsReducer;