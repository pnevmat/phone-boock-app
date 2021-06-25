import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';
import authorisationReducers from './reducers/authorisationReducer'

import logger from 'redux-logger';

const userTokenPersistConfig = {
    key: 'token',
    storage,
    whitelist: 'userToken'
}

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        userData: authorisationReducers.authorisationReducer,
        userToken: persistReducer(userTokenPersistConfig, authorisationReducers.tokenReducer),
        emailVerifyToken: authorisationReducers.emailVerifyTokenReducer,
        isRegistered: authorisationReducers.registeredReducer,
        isEmailVerified: authorisationReducers.emailVerifiedReducer,
        isAuthorised: authorisationReducers.authorisedReducer
    },
    middleware: [
        ...getDefaultMiddleware({ serializableCheck: false }),
        logger
    ],
    devTools: process.env.NODE_ENV === 'development'
});

const persistor = persistStore(store);

export default {store, persistor};