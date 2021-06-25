import {createReducer} from '@reduxjs/toolkit';

import registerActions from '../actions/AuthorisationActions/registerActions';
import loginActions from '../actions/AuthorisationActions/loginActions';
import getUserDataActions from '../actions/AuthorisationActions/getUserDataActions';
import logoutActions from '../actions/AuthorisationActions/logoutActions';
import emailVerifyActions from '../actions/AuthorisationActions/emailVerifyActions';

const authorisationInitialState = {};

const authorisationReducer = createReducer(authorisationInitialState, {
    [registerActions.registerSuccess]: (_, {payload}) => payload.user,
    [registerActions.registerError]: (_, payload) => payload,
    [loginActions.loginSuccess]: (_, {payload}) => ({_id: payload._id, name: payload.name, email: payload.email, avatar: payload.avatar, subscription: payload.subscription, createdAt: payload.createdAt}),
    [loginActions.loginError]: (_, payload) => payload,
    [getUserDataActions.getUserDataSuccess]: (_, {payload}) => payload,
    [getUserDataActions.getUserDataError]: (_, {payload}) => payload,
    [logoutActions.logoutSuccess]: (_, {payload}) => payload,
    [logoutActions.logoutError]: (_, {payload}) => payload,
    [emailVerifyActions.emailVerifyError]: (_, {payload}) => payload,
});

// const tokenInitialState = null;

const tokenReducer = createReducer({userToken: null}, {
    [loginActions.loginSuccess]: (_, {payload}) => ({userToken: payload.token}),
    [logoutActions.logoutSuccess]: (_, __) => ({userToken: null}),
    [getUserDataActions.getUserDataError]: (_, __) => ({userToken: null}),
});

const registeredReducer = createReducer(false, {
    [registerActions.registerSuccess]: () => true,
    [registerActions.registerError]: () => false,
});

const emailVerifyTokenReducer = createReducer({emailVerifyToken: null}, {
    [registerActions.registerSuccess]: (_, {payload}) => ({emailVerifyToken: payload.data.verifyToken}),
    [emailVerifyActions.emailVerifySuccess]: (_, __) => ({emailVerifyToken: null}),
});

const emailVerifiedReducer = createReducer(false, {
    [loginActions.loginSuccess]: (_, {payload}) => (payload.emailVerify),
    [emailVerifyActions.emailVerifySuccess]: () => true,
    [emailVerifyActions.emailVerifyError]: () => false,
});

const authorisedReducer = createReducer(false, {
    [loginActions.loginSuccess]: () => true,
    [getUserDataActions.getUserDataSuccess]: () => true,
    [logoutActions.logoutSuccess]: () => false,
    [loginActions.loginError]: () => false,
    [getUserDataActions.getUserDataError]: () => false,
});

export default {authorisationReducer, tokenReducer, authorisedReducer, registeredReducer, emailVerifiedReducer, emailVerifyTokenReducer};