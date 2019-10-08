import React from 'react'
import AskForBatchForm from './AskForBatchForm';
import {connect} from 'react-redux';
import StudentProfileForm from './StudentProfileForm';

class StudentProfileFormInvoker extends React.Component {
  submit = (event) => {
    event.preventDefault();

    // print the form values to the console
    console.log("Student"+event.target.subject.value)
    const studentdata =[{
        name:event.target.name.value,
        password:event.target.password.value,
        emailId:event.target.emailId.value,
       category:event.target.category.value,
       mobile:event.target.mobile.value,
       subject:event.target.subject.value,
        freeTextRequirement:event.target.freeTextRequirement.value
    }]
    console.log("dispatching action to reducer"+studentdata[0].name+" "+studentdata[0].subject)
    // give action to the reducer
    this.props.dispatch({
        type:'ADD_STUDENT',
        data:studentdata
    })
    console.log("dispatched - student")
    //make the form blank again
  //  event.target.subject.value=''
    


  }
  render() {
    return <StudentProfileForm handleSubmit={this.submit} />
  }
}

//export default AskForBatchFromInvoker

export default connect()(StudentProfileFormInvoker);