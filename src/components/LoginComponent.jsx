import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'

class LoginComponent extends React.Component {


    constructor(props)
    {
        super(props)
        
        console.log("inside login Component " + this.state)
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
                Login Page  
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
          <td className='batchform'><label htmlFor="userid" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>User ID(Your email)</label>
          </td>
          <td className='batchform'>
          <Field name="userid" component="input" type="text" className="col-sm-10" style={{width:'350px'}}/>
          </td>
        </tr>
  
      
  
        <tr>
          <td className='batchform'><label htmlFor="Password" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Choose your password</label>
          </td>
          <td className='batchform'>
          <Field name="password" component="input" type="password" className="col-sm-10" style={{width:'350px'}}/>
          </td>
        </tr>
  
        </table>
  
        <br>
        </br>
        <br>
        </br>
        <button type="submit">Submit</button>
        <button type="button">Register</button>
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

LoginComponent = reduxForm({
    form: 'logincomponent' // a unique name for this form
  })(LoginComponent);
  
  
  //export default AskForBatchForm
  export default connect()(LoginComponent);