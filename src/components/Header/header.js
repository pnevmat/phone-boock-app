import React from 'react';
import {useDispatch} from 'react-redux';

import logoutOperation from '../../redux/operations/AuthorisationOperations/logoutOperation';

import AutorisationNav from './authorisationNav/autorisationNav';
import UserMenu from './userMenu/userMenu';

import PropTypes from 'prop-types';

import styles from './header.module.css'

const Header = (props) => {
    const {authorisation, userId, userName, avatar} = props;
    const dispatch = useDispatch();
    const onLogout = userData => dispatch(logoutOperation(userData, userId))
    // const logoutHandler = (userData) => onLogout(userData, userId)
    return (
        <section className={styles.section}>
            {authorisation ? <UserMenu onLogout={onLogout} userId={userId} userName={userName} avatar={avatar} /> : <AutorisationNav />}
        </section>
    );
};

export default Header;

Header.defaultProps = {
    authorisation: null
};

Header.propTypes = {
    authorisation: PropTypes.bool,
};