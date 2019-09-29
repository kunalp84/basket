import React from 'react'
import AskForBatchForm from './AskForBatchForm';
import {connect} from 'react-redux';

class AskForBatchFromInvoker extends React.Component {
  submit = (event) => {
    event.preventDefault();

    // print the form values to the console
    console.log(event.target.subject.value)
    const enquiryRequestInput ={
        subject:event.target.subject.value,
        category:event.target.category.value,
        freeTextRequirement:event.target.freeTextRequirement.value
    }

    // give action to the reducer
    this.props.dispatch({
        type:'ADD_ENQUIRY',
        data:enquiryRequestInput
    })

    //make the form blank again
    event.target.subject.value=''
    


  }
  render() {
    return <AskForBatchForm handleSubmit={this.submit} />
  }
}

//export default AskForBatchFromInvoker

export default connect()(AskForBatchFromInvoker);