import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import AuthenticationService from './services/AuthenticationService';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class AuthenticatedRoute extends React.Component {

        render() {
            if(AuthenticationService.isUserLoggerIn() ) {

                return <Route {...this.props} />
            }
            else
            {
               return <Redirect to="/Login"/>
            } 


        }

} 
export default AuthenticatedRoute