import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import emailVerifyOperation from '../redux/operations/AuthorisationOperations/emailVerifyOperation';
import selectors from '../redux/selectors/selectors';

import Header from '../components/Header/header';

const EmailVerifyPage = (props) => {
    const userData = useSelector(selectors.getUserData)
    const dispatch = useDispatch();
    useEffect(() => {
        const userData = props.match.params.verifyToken;
        dispatch(emailVerifyOperation(userData))
    }, []);

    return (
        <>
            <Header />
            {userData.Status === 200 && userData !== {} ?
                <>
                    <h1>You've successfuly cunfirmed your email!</h1>
                    <h2>Stay cool, in few seconds you will be redirected to your contacts list!</h2>
                </>
                : <h1>{userData.ResponseBody ? userData.ResponseBody.message : 'Loading'}!</h1>
            }
        </>
    )
};

export default EmailVerifyPage;