import React, { Component } from 'react';
import {connect} from 'react-redux';
//import Button from 'react-bootstrap/Button' 
import ReactTable from 'react-table'
//import Form from 'react-bootstrap/Form'

// redux imports
import { Field, reduxForm } from 'redux-form'




// Example Data

const theData = 
    {
       name: 'Stud. Yogesh',
      subject:'',
      category:'',
      freeTextRequirement:''      
    }

    const listOfCategories = [{
      name:'Engineering'
    },
    {
      name:'School levels 1-10'
    },
    {
       name:'Junior College levels 11 and 12' 
    }]


class AskForBatchForm extends React.Component {


    constructor(props)
    {
      super(props)

    }

    render() {
      return (       <div className="col-md-8 px-3" > 
      <div  >

      <section style={{ borderBottomColor:'grey'}}>
     
     
  <div className="container py-3" bg="success"> 
    <div className="card">
      <div className="row">

      <h1 style={{ justifyContent:'center' , alignItems:'center'}}> 
      <div className="col-md-7" style={{verticalAlign:'center'}}>
                     Batch Request Form
      <div className="col-md-4" style={{verticalAlign:'center'}}>

      </div>
      
</div>
     
      </h1>
     

        

          

          <br>
          </br>
          <br>
          </br>
          
          <br>
          </br>
          <br>
          </br>


      

           { /*<Form >
  

    
  <Form.Group controlId="subject" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Subject Name</Form.Label>
    <Form.Control type="subject" placeholder={theData.subject}   className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>
  

  
  <Form.Group controlId="category" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Select Category</Form.Label>
    <Form.Control as="select" className="col-sm-10" style={{width:'350px'}}>
      {
        listOfCategories.map(category => <option>{category.name}</option> )
       <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      
     }
     </Form.Control>
  </Form.Group>

  <Form.Group controlId="freeTextRequirement" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Explain your requirement</Form.Label>
    <Form.Control as="textarea" rows="3" className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>


  <Button variant="primary" type="submit" style={{alignSelf:'right', alignItems:'right' , alignItems:'right', alignContent:'right',justifyContent:'right'}} >
    Submit
  </Button> 

</Form>   */}

<form onSubmit={this.props.handleSubmit}>
  <table className='center'>
      <tr>
        <td className='batchform'><label htmlFor="subject" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Subject</label>
        </td>
        <td className='batchform'>
        <Field name="subject" component="input" type="text" className="col-sm-10" style={{width:'350px'}}/>
        </td>
      </tr>

      <tr>
       <td className='batchform'> <label htmlFor="category" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Category</label>
        </td>
         <td className='batchform'> <Field name="category" component="select" className="col-sm-10" style={{width:'350px'}}>
         { listOfCategories.map(category => <option>{category.name}</option> ) }
          </Field>
          </td>
      </tr>
      <tr>
        <td className='batchform'> <label htmlFor="freeTextRequirement" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Free text Requirement</label>
        </td>
        <td className='batchform'> 
        <Field name="freeTextRequirement" component="textarea" className="col-sm-10" style={{width:'350px'}} />
      </td>
      </tr>
      </table>

      <br>
      </br>
      <br>
      </br>
      <button type="submit">Submit</button>
      
    </form>

</div>
      </div>


    </div>
   
</section>







          



</div>
    </div>


 
        );
    }
  }


  AskForBatchForm = reduxForm({
    form: 'askforbatchform' // a unique name for this form
  })(AskForBatchForm);
  
  
  //export default AskForBatchForm
  export default connect()(AskForBatchForm);