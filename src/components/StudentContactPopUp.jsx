import React, { Component } from 'react';
import Button from 'react-bootstrap/Button' 
import ReactTable from 'react-table'
import Form from 'react-bootstrap/Form'
import AuthenticationService from './services/AuthenticationService';

import {Redirect} from 'react-router-dom';


// Example Data

const theData = 
    {
       name: 'Stud. Yogesh',
       Institute:'Vidyalankar Institute of Technology',
       PrimaryLocation:'Mumbai',
       ExactAddress:'Kandivali west',
       ContactNumber:'+91 99 30 68 4024' ,    
       EmailAddress:'kunal.pimparkhede@gmail.com',
       Course:'Engineering',
       Branch:'Computer Engineering',
       Year:'First Year' 
    }


    
   

class StudentContactPopUp extends React.Component {
    render() {
      if(!AuthenticationService.isUserLoggerIn() )
      {
     return  <Redirect to="/Login"/>
      }


      return (       <div className='popup' style={{width:'50%'  } } > 
      <div  >

      <section style={{ borderBottomColor:'grey'}}>
     
     
  <div className="container py-3" bg="success"> 
    <div className="card">
      <div className="row">

      <h1 style={{ justifyContent:'center' , alignItems:'center'}}> 
      <div className="col-md-4" style={{verticalAlign:'center'}}>
      Student Details

      <div className="col-md-4" style={{verticalAlign:'center'}}>

      </div>
      <Button onClick={this.props.closePopup} style={{alignSelf:'right', alignItems:'right' , alignItems:'right', alignContent:'right',justifyContent:'right'}}>Go back</Button>

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


      

          <Form >
  

    
  <Form.Group controlId="fullName" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Full Name</Form.Label>
    <Form.Control type="email" placeholder={theData.name}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>
  <Form.Group controlId="Institute" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Subjects</Form.Label>
    <Form.Control type="email" placeholder={theData.Institute}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="PrimaryLocation" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Category</Form.Label>
    <Form.Control type="email" placeholder={theData.PrimaryLocation}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="ExactAddress" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>TeachingExperience</Form.Label>
    <Form.Control type="email" placeholder={theData.ExactAddress}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="EmailAddress" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>IndustrialExperience</Form.Label>
    <Form.Control type="email" placeholder={theData.EmailAddress}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="Course" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Institute</Form.Label>
    <Form.Control type="email" placeholder={theData.Course}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="Branch" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>PrimaryLocation</Form.Label>
    <Form.Control type="email" placeholder={theData.Branch}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>


  <Form.Group controlId="ContactNumber" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>ContactNumber</Form.Label>
    <Form.Control type="email" placeholder={theData.ContactNumber}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>
  <Form.Group controlId="Year" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>EmailAddress</Form.Label>
    <Form.Control type="email" placeholder={theData.Year}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  
  

  
  
</Form>

</div>
      </div>


    </div>
   
</section>







          



</div>
    </div>


 
        );
    }
  }

  export default StudentContactPopUp