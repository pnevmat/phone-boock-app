import {createSelector} from '@reduxjs/toolkit'

const getAllContacts = state => {
  return state.contacts
};

const getFilter = state => state.filter;

// const contactsFinderHandler = (contacts, filter) => {

//     if (filter !== '') {
//       const foundContacts = contacts.filter(contact => 
//         contact.name.toLowerCase().includes(filter));
//       return foundContacts
//     };
// };

const contactsFinderHandler = createSelector([getAllContacts, getFilter], (contacts, filter) => {
  if (filter !== '' && contacts.length > 0) {
    const foundContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter));
    return foundContacts
  };
});

const registration = state => {
  return state.isRegistered;
}

const authorisation = state => {
  return state.isAuthorised;
};

const emailVerification = state => {
  return state.isEmailVerified;
};

const getEmailVerifyToken = state => {
  return state.emailVerifyToken;
};

const getUserToken = state => {
  return state.userToken.userToken;
};

const getUserData = state => state.userData;

const getUserId = state => state.userData._id;

const getUserName = state => state.userData.name;

const getUserAvatar = state => state.userData.avatar;

export default {
  getAllContacts,
  getFilter,
  contactsFinderHandler,
  authorisation,
  getUserName,
  registration,
  emailVerification,
  getEmailVerifyToken,
  getUserToken,
  getUserAvatar,
  getUserId,
  getUserData
};