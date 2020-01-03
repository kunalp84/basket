import React from 'react'
import AskForBatchForm from './AskForBatchForm';
import {connect} from 'react-redux';
import StudentProfileForm from './StudentProfileForm';
import AuthenticationService from './services/AuthenticationService';
import createAction from './actions/ProfileAction'

class StudentProfileFormInvoker extends React.Component {
  submit = (event) => {
    event.preventDefault();

    // print the form values to the console
    console.log("Student********"+event.target.subject.value)
    
   // console.log("dispatching action to reducer"+studentdata[0].name+" "+studentdata[0].subject)
    // give action to the reducer
    
    
    if(AuthenticationService.isUserLoggerIn())
    {
      const studentdata ={
        name:event.target.name.value,
        password:event.target.password.value,
        emailId:AuthenticationService.getUser(),
       category:event.target.category.value,
       mobile:event.target.mobile.value,
       subject:event.target.subject.value,
        freeTextRequirement:event.target.freeTextRequirement.value,
        confirmpassword:event.target.confirmpassword.value,


        teachingExperience:event.target.teachingExperience.value,
        industrialExperience:event.target.industrialExperience.value,
         location:event.target.location.value,
         institute:event.target.institute.value,

         userType:event.target.userType.value,

    //    userType:event.target.userType,
        mode:'EXISTING_USER_UPDATE'

    }

    console.log(studentdata)
    createAction(this.props,studentdata,'EXISTING_USER_UPDATE')
   /*   this.props.dispatch({
        type:'EDIT_PROFILE',
        data:studentdata,
     //   "EXISTING_USER_UPDATE"
    })*/
    console.log("This is Edit existing Student/Prof")

    }
    else {
      const studentdata ={
        name:event.target.name.value,
        password:event.target.password.value,
        emailId:event.target.emailId.value,
       category:event.target.category.value,
       mobile:event.target.mobile.value,
       subject:event.target.subject.value,
        freeTextRequirement:event.target.freeTextRequirement.value,
        confirmpassword:event.target.confirmpassword.value,
      //  userType:event.target.userType,

      teachingExperience:event.target.teachingExperience.value,
      industrialExperience:event.target.industrialExperience.value,
       location:event.target.location.value,
       institute:event.target.institute.value,
       userType:event.target.userType.value,
        mode:'NEW_USER_REGISTRATION'

    }
    console.log(studentdata)
    createAction(this.props,studentdata,'NEW_USER_REGISTRATION')

   /* this.props.dispatch({
        type:'ADD_PROFILE',
        data:studentdata
    })*/
    console.log("This is add new Student/Prof")
    //make the form blank again
  //  event.target.subject.value=''
  }


  }
  render() {
    return <StudentProfileForm handleSubmit={this.submit} />
  }
}

//export default AskForBatchFromInvoker

export default connect()(StudentProfileFormInvoker);