import axios from "axios";
import loginActions from '../../actions/AuthorisationActions/loginActions';
import BASE_URL from '../utils/apiVariables';

axios.defaults.baseURL = BASE_URL;

// {
//     "name":"Vadim",
//     "email":"kislenkoandrey10@gmail.com",
//     "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc2Zjc2MDY2N2M4MjAwMTc5ZDdkY2UiLCJpYXQiOjE2MTg0MDkzMTJ9.IVQ07ceBFrS-fICkN1XFGXAzbaREDNyJXG2sMlBrlkg",
//     "password":"12345678"
// }

// {
//     "name":"pnevmat",
//     "email":"lejlipet@gmail.com",
//     "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc2ZjljNTY2N2M4MjAwMTc5ZDdkZDMiLCJpYXQiOjE2MTg0MDk5MjV9.L7pXex2Jkeg0k6V1hnnKq-Tk3HCw8OW1EFSLY35WHKs",
//     "password":""
// }

const registerOperation = userData => async dispatch => {
    dispatch(loginActions.loginRequest());

    try {
        const response = await axios.post('/api/users/login', userData);
        console.log('response', response);
        const {data} = response.data
        console.log('response data', data);
        if(response.data && data) {
            dispatch(loginActions.loginSuccess(data));
        } else {
            dispatch(loginActions.loginError(response.data));
        }
    }catch(error) {
        dispatch(loginActions.loginError(error.message));
    };
};

export default registerOperation;