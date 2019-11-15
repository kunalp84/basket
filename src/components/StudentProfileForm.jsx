import React, { Component } from 'react';
import {connect} from 'react-redux';
//import Button from 'react-bootstrap/Button' 
import ReactTable from 'react-table'
//import Form from 'react-bootstrap/Form'

// redux imports
import { Field, reduxForm } from 'redux-form'
import AuthenticationService from './services/AuthenticationService';




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


class StudentProfileForm extends React.Component {


    constructor(props)
    {
      super(props)

    }
    componentDidMount() {
      console.log('componentDidMount - Profile Screen')
if(AuthenticationService.isUserLoggerIn()) { 

    console.log("User is logged in fetching the profile information")
      this.props.dispatch({
        type:'LOAD_PROFILE',
        profile:[] 
    })

  }
    //window.addEventListener('scroll', this._loadMore, false);

      //console.log(this.state)
      console.log("end of did mount- Profile Screen")
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
Your Profile   
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
    <tbody>
      <tr>
        <td className='batchform'><label htmlFor="Name" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Name</label>
        </td>
        <td className='batchform'>
        <Field name="name" component="input" type="text" className="col-sm-10" style={{width:'350px'}}  placeholder={this.props.profile.name}/>
        </td>
      </tr>

      <tr>
        <td className='batchform'><label htmlFor="Email ID (this will be your default user name)" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}  >Email ID</label>
        </td>
        <td className='batchform'>
    {   !AuthenticationService.isUserLoggerIn() &&  <Field name="emailId" component="input" type="text" className="col-sm-10" style={{width:'350px'}} /> }
    {   AuthenticationService.isUserLoggerIn() &&  AuthenticationService.getUser() }
        </td>
      </tr>

      <tr>
        <td className='batchform'><label htmlFor="Password" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Choose your password</label>
        </td>
        <td className='batchform'>
        <Field name="password" component="input" type="password" className="col-sm-10" style={{width:'350px'}}/>
        </td>
      </tr>

      <tr>
        <td className='batchform'><label htmlFor="Mobile Number" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Mobile Number</label>
        </td>
        <td className='batchform'>
        <Field name="mobile" component="input" type="text" className="col-sm-10" style={{width:'350px'}}/>
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
       <td className='batchform'> <label htmlFor="interestedSubjects" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Interested Subjects</label>
        </td>
         <td className='batchform'>        
          <Field name="subject" component="input" type="text" className="col-sm-10" style={{width:'350px'}}/>

          </td>
      </tr>


      <tr>
        <td className='batchform'> <label htmlFor="Tell us more about you" className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Anything else you would like to tell us about yourself</label>
        </td>
        <td className='batchform'> 
        <Field name="freeTextRequirement" component="textarea" className="col-sm-10" style={{width:'350px'}} />
      </td>
      </tr>
      </tbody>
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


  StudentProfileForm = reduxForm({
    form: 'studentprofileform',
    enableReinitialize:true
    // a unique name for this form
  })(StudentProfileForm);
  


const mapStateToProps = (state,ownProps) => {
  console.log("$$$ state  "+state)  
  console.log(state)
  console.log("OwnProps"+ownProps)
    console.log("i222nside mapStateToProps - list of teacher enquiries" + state.registrationReducer.profile)

    return {
      initialValues:{
        name:state.registrationReducer.profile.name,
        emailId:state.registrationReducer.profile.emailId,
        password:state.registrationReducer.profile.password,

        mobile:state.registrationReducer.profile.mobile,

        subject:state.registrationReducer.profile.subject,
        category:state.registrationReducer.profile.category,
        freeTextRequirement:state.registrationReducer.profile.freeTextRequirement




      },
         profile: state.registrationReducer.profile,
         profileUpdateStatus:state.registrationReducer.profileUpdateStatus
    }

} 
  
  //export default AskForBatchForm
  export default connect(mapStateToProps)(StudentProfileForm);