import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import selectors from '../redux/selectors/selectors';

const PublicRoute = ({
    component: Component,
    // authorisation,
    redirectTo,
    ...routeProps
}) => {
    const registration = useSelector(selectors.registration);

    return (
        <Route 
            {...routeProps}
            render={props => registration && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />}
        />
    );
};

export default PublicRoute;

// const mapStateToProps = state => ({
//     authorisation: selectors.authorisation(state)
// })

// export default connect(mapStateToProps)(PublicRoute);