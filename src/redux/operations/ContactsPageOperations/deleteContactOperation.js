import axios from 'axios';
import actions from '../../actions/ContactPageActions/deleteContact';
import BASE_URL from '../utils/apiVariables';

axios.defaults.baseURL = BASE_URL;

const onDeleteContact = id => dispatch => {
    console.log('Delete contact id: ', id);
    dispatch(actions.deleteContactRequest());

    axios.delete(`/api/contacts/${id}`)
        .then(({data}) => dispatch(actions.deleteContactSuccess(id)))
        .catch(error => dispatch(actions.deleteContactError(error)))
};

export default onDeleteContact;