import axios from "axios";
import emailVerifyActions from '../../actions/AuthorisationActions/emailVerifyActions';
import BASE_URL from '../utils/apiVariables';

axios.defaults.baseURL = BASE_URL;

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
// };

const emailVerifyOperation = userData => async dispatch => {
    dispatch(emailVerifyActions.emailVerifyRequest());
    const verifyToken = userData;

    try {
        const response = await axios.get(`/api/users/verify/${verifyToken}`);
        console.log(response);
        const {data} = response;
        if(data.Status === 200) {
            dispatch(emailVerifyActions.emailVerifySuccess());
            return
        }
        dispatch(emailVerifyActions.emailVerifyError(data));

        // token.set(response.data.token);
    }catch(error) {
        dispatch(emailVerifyActions.emailVerifyError(error.message));
    };
};

export default emailVerifyOperation;