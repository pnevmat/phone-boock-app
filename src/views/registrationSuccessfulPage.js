import React from 'react';
// import {useSelector} from 'react-redux';

// import selectors from '../redux/selectors/selectors';

import Header from '../components/Header/header';


const registrationSuccessfulPage = (props) => {
    
    return (
        <>
            <Header />
            <h1>Congratulations! You've successfuly registered!</h1>
            <h2>Now one more step left! We've sent a letter to your email, please follow insructions of this letter to confirm your email!</h2>
        </>
    )
};

export default registrationSuccessfulPage;