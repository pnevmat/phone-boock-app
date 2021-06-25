import {React, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import loginOperation from '../redux/operations/AuthorisationOperations/loginOperation';
import selectors from '../redux/selectors/selectors';

import Header from '../components/Header/header';
import LoginForm from "../components/LoginForm/loginForm";

const LoginPage = () => {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
    const onLoginSubmit = userData => dispatch(loginOperation(userData));
    const userData = useSelector(selectors.getUserData);
    if(data !== 'Invalid login or password' && userData.payload && !userData._id) {
        setData(userData.payload.message);
    };

    useEffect(() => {
        if(userData.payload && data !== '') {
            alert(`${data}`);
            setData('');
        }
    }, [data]);

    return (
        <>
            <Header />
            <h3>Login Form</h3>
            <LoginForm 
                onLoginSubmit={onLoginSubmit}
            />
        </>
    )
};

export default LoginPage;