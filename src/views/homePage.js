import React from 'react';
import {useSelector} from 'react-redux';

import selectors from '../redux/selectors/selectors';

import Header from '../components/Header/header';


const HomePage = (props) => {
    const authorisation = useSelector(selectors.authorisation);
    const userName = useSelector(selectors.getUserName);
    const avatar = useSelector(selectors.getUserAvatar);
    
    return (
        <>
            <Header 
                userName={userName}
                avatar={avatar}
                authorisation={authorisation}
            />
            <h1>Home Page</h1>
        </>
    )
};

export default HomePage;