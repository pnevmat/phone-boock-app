import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import selectors from '../redux/selectors/selectors';

const PublicRouteLogin = ({
    component: Component,
    redirectTo,
    ...routeProps
}) => {
    const userToken = useSelector(selectors.getUserToken);

    return (
        <Route 
            {...routeProps}
            render={props => userToken && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />}
        />
    );
};

export default PublicRouteLogin;