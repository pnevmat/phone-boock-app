import React, {useEffect, lazy, Suspense} from 'react';
import { useDispatch } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import PublicRouteEmailVerify from './components/PublicRouteEmailVerify';
import PublicRouteLogin from './components/publicRouteLogin'

import getUserDataOperation from './redux/operations/AuthorisationOperations/getUserDataOperation';

import './App.css';

const HomePage = lazy(() => import('./views/homePage' /* webpackChunkName: "Home-Page" */));
const RegisterPage = lazy(() => import('./views/registerPage' /* webpackChunkName: "Registration-Page" */));
const LoginPage = lazy(() => import('./views/loginPage' /* webpackChunkName: "Login-Page" */));
const ContactsPage = lazy(() => import('./views/contactsPage' /* webpackChunkName: "Contacts-Page" */));
const RegistrationSuccessfulPage = lazy(() => import('./views/registrationSuccessfulPage' /* webpackChunkName: "Registration-Successful-Page" */));
const EmailVerifyPage = lazy(() => import('./views/emailVerifyPage' /* webpackChunkName: "Email-verify-Page" */));

const PhoneBook = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataOperation());
    
  }, [dispatch]);

  return (
    <Suspense fallback={<p>Загружаем...</p>} >
      <section className="section">
        <Switch>
          <Route exact path='/' render={(props) => <HomePage {...props} />} />
          <PublicRoute path='/register' restricted component={RegisterPage} redirectTo='/register-success' />
          <Route path='/register-success' render={(props) => <RegistrationSuccessfulPage {...props} />} />
          <PublicRouteEmailVerify path='/email-verify/:verifyToken' restricted component={EmailVerifyPage} redirectTo='/login' />
          <PublicRouteLogin path='/login' restricted component={LoginPage} redirectTo='/contacts' />
          <PrivateRoute path='/contacts' component={ContactsPage} redirectTo='/login' />
        </Switch>
      </section>
    </Suspense>
  );
};

export default PhoneBook;

// class PhoneBook extends Component {

//   componentDidMount() {
//     this.props.ongetUserData()
//   };

//   render() {
//     return (
      // <Suspense fallback={<p>Загружаем...</p>} >
      //   <section className="section">
      //     <Switch>
      //       <Route exact path='/' render={(props) => <HomePageContainer {...props} />} />
      //       <PublicRoute path='/register' restricted component={RegistrationContainer} redirectTo='/contacts' />
      //       <PublicRoute path='/login' restricted component={LoginContainer} redirectTo='/contacts' />
      //       <PrivateRoute path='/contacts' component={ContactsPageContainer} redirectTo='/login' />
      //     </Switch>
      //   </section>
      // </Suspense>
//     )
//   };
// };

// const mapDispatchToProps = {
//   ongetUserData: getUserDataOperation,
// }

// export default connect(null, mapDispatchToProps)(PhoneBook);