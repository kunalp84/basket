import React from 'react'
import AskForBatchForm from './AskForBatchForm';
import {connect} from 'react-redux';
import StudentProfileForm from './StudentProfileForm';
import LoginComponent from './LoginComponent';
import AuthenticationService from './services/AuthenticationService';
import {Redirect} from 'react-router-dom';
import createActionLogin from './actions/LoginAction'

class LoginComponentInvoker extends React.Component {
  submit = (event) => {
    event.preventDefault();

    // print the form values to the console
    //console.log("Student"+event.target.subject.value)
    const loginData =[{
      userid:event.target.userid.value,
        password:event.target.password.value,
    }]
    console.log("dispatching action to reducer"+loginData[0].userid+" "+loginData[0].password)
    // give action to the reducer
  //  this.props.dispatch({
    //    type:'CHECK_LOGIN',
      //  data:loginData
    //})

    createActionLogin(this.props,loginData)
    console.log("dispatched - login reducer")
    //make the form blank again
  //  event.target.subject.value=''
 
  


  }

  
  



  render() {

    if (AuthenticationService.isUserLoggerIn())
    return <Redirect to="/" />;

    return <LoginComponent  key={this.props.isLoginSuccess}  handleSubmit={this.submit} isLoginSuccess={this.props.isLoginSuccess}/>
    
  }
}

//export default AskForBatchFromInvoker

const mapStateToProps = (state,ownProps) => {
  console.log("$$$ state  "+state)  
  console.log(state)
  console.log("OwnProps"+ownProps)
    console.log("i222nside mapStateToProps - is login success" + state.loginDataReducer.isLoginSuccess)
  

    return {
      isLoginSuccess: state.loginDataReducer.isLoginSuccess
    }

} 

export default connect(mapStateToProps)(LoginComponentInvoker);