import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import selectors from '../redux/selectors/selectors';

const PublicRouteEmailVerify = ({
    component: Component,
    redirectTo,
    ...routeProps
}) => {
    const emailVerified = useSelector(selectors.emailVerification);

    return (
        <Route 
            {...routeProps}
            render={props => emailVerified && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />}
        />
    );
};

export default PublicRouteEmailVerify;