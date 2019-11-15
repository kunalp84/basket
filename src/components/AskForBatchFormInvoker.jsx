import React from 'react'
import AskForBatchForm from './AskForBatchForm';
import {connect} from 'react-redux';
import AuthenticationService from './services/AuthenticationService';
import createAction from './actions/TeacherEnquiryAction';

class AskForBatchFromInvoker extends React.Component {
  submit = (event) => {
    event.preventDefault();

    // print the form values to the console
    console.log(event.target.subjectName.value)
    const teacherEnquiries =[{
        subjectName:event.target.subjectName.value,
       category:event.target.category.value,
        requirement:event.target.requirement.value,
        userName: AuthenticationService.getUser(),
        respMessage:''
    }]
    console.log("dispatching action to reducer"+teacherEnquiries[0].subjectName+" "+teacherEnquiries[0].category)
    // give action to the reducer

    createAction(this.props, teacherEnquiries);

    console.log("Back from Action method ")

   // this.props.dispatch({
   //     type:'ADD_ENQUIRY',
     //   data:teacherEnquiries
    //})
    console.log("Dispatched action using props.dispatch")
    //make the form blank again
    event.target.subjectName.value=''
    event.target.requirement.value=''
    
  }
  render() {
    return <>   
    <AskForBatchForm handleSubmit={this.submit} responseMessage={this.props.responseMessage}/> 
   
   
    </>
  }
}

//export default AskForBatchFromInvoker
const mapStateToProps = (state,ownProps) => {

  console.log("$$$ state $$$$$$$$$ "+state)  
  console.log(state)
  console.log("OwnProps"+ownProps)

    return {
         responseMessage: state.teacherEnquiryReducer.responseMessage,
    }

} 
export default connect(mapStateToProps)(AskForBatchFromInvoker);