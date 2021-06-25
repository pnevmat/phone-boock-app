import axios from 'axios';
import actions from '../../actions/ContactPageActions/didMountStoreUpdate';
import BASE_URL from '../utils/apiVariables';

axios.defaults.baseURL = BASE_URL;

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

const onStoreUpdate = text => dispatch => {
    token.set(text)

    dispatch(actions.updateStoreRequest());

    axios.get('/api/contacts')
    .then(({data}) => {
        return dispatch(actions.updateStoreSuccess(data.data.contacts))})
    .catch(error => {
        return dispatch(actions.updateStoreError(error.message))})
}

export default onStoreUpdate;