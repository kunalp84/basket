import React from 'react'
import AskForBatchForm from './AskForBatchForm';
import {connect} from 'react-redux';

class AskForBatchFromInvoker extends React.Component {
  submit = (event) => {
    event.preventDefault();

    // print the form values to the console
    console.log(event.target.subject.value)
    const teacherEnquiries =[{
        subject:event.target.subject.value,
       category:event.target.category.value,
        freeTextRequirement:event.target.freeTextRequirement.value
    }]
    console.log("dispatching action to reducer"+teacherEnquiries[0].subject+" "+teacherEnquiries[0].category)
    // give action to the reducer
    this.props.dispatch({
        type:'ADD_ENQUIRY',
        data:teacherEnquiries
    })
    console.log("dispaycjed")
    //make the form blank again
    event.target.subject.value=''
    


  }
  render() {
    return <AskForBatchForm handleSubmit={this.submit} />
  }
}

//export default AskForBatchFromInvoker

export default connect()(AskForBatchFromInvoker);