import axios from "axios";
import logoutActions from '../../actions/AuthorisationActions/logoutActions';
import BASE_URL from '../utils/apiVariables';

axios.defaults.baseURL = BASE_URL;

const token = {
    unset() {
        axios.defaults.headers.common.Authorization = null;
    }
};

const logoutOperation = (userData, _id) => async dispatch => {
    dispatch(logoutActions.logoutRequest());
    try {
        const response = await axios.post('/api/users/logout', {_id});

        token.unset();

        dispatch(logoutActions.logoutSuccess(response.data));
    }catch(error) {
        dispatch(logoutActions.logoutError(error.message));
    };
};

export default logoutOperation;