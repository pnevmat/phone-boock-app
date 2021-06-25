import {createAction} from '@reduxjs/toolkit';

const emailVerifyRequest = createAction('authorisation/emailVerifyRequest');
const emailVerifySuccess = createAction('authorisation/emailVerifySuccess');
const emailVerifyError = createAction('authorisation/emailVerifyError');

export default {emailVerifyRequest, emailVerifySuccess, emailVerifyError};