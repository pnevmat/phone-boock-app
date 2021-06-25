import axios from 'axios';
import actions from '../../actions/ContactPageActions/addContact';
import BASE_URL from '../utils/apiVariables';

axios.defaults.baseURL = BASE_URL;

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

const onAddContact = (text, userToken) => dispatch => {
    const contact = {...text}
    token.set(userToken)

    dispatch(actions.addContactRequest());

    axios.post('/api/contacts/', contact)
        .then(({data}) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error)));
};

export default onAddContact;