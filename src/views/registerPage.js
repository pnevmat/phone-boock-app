import {React, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import registerOperation from '../redux/operations/AuthorisationOperations/registerOperation';
import selectors from '../redux/selectors/selectors';

import Header from '../components/Header/header';
import RegistrationForm from "../components/RegistrationForm/registrationForm";

const RegisterPage = () => {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
    const onRegistrationSubmit = (userData) => dispatch(registerOperation(userData))
    
    const userData = useSelector(selectors.getUserData);
    const responses = {
        emalInUse: 'This email is already in use',
        missingField: 'Missing required name, email or password field'
    };

    if(userData.payload && userData.type === 'authorisation/registerError') {
        if(data !== responses.emalInUse && data !== responses.missingField && userData.payload.message) {
            setData(userData.payload.message);
        } else if(data !== responses.missingField) {
            setData(responses.missingField);
        };
    };

    useEffect(() => {
        if(userData.payload && data !== '') {
            alert(`${data}`);
            setData('');
        };
    }, [data]);

    return (
        <>
            <Header />
            <h3>Sign Up Form</h3>
            <RegistrationForm 
                onRegistrationSubmit={onRegistrationSubmit}
            />
        </>
    )
};

export default RegisterPage;