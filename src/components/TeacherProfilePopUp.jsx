import React, { Component } from 'react';
import Button from 'react-bootstrap/Button' 
import ReactTable from 'react-table'
import Form from 'react-bootstrap/Form'
import AuthenticationService from './services/AuthenticationService';

import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


// Example Data

const theData = 
    {
       name: 'Prof.Pankaj',
       subjects: 'MP,CG,AMP ',
       category: 'Engineering',
       fans: '256',
       photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg',
       Expertise: 'Computer Science',
       TeachingExperience:'13 years',
       IndustrialExperience:'13 years',
       Institute:'Vidyalankar Institute of Technology',
       PrimaryLocation:'Mumbai',
       ExactAddress:'Kandivali west',
       ContactNumber:'+91 99 30 68 4024' ,    
       OnlineTeachingExperience:'12 years',
       EmailAddress:'kunal.pimparkhede@gmail.com',
       
    
    }



class TeacherProfilePopUp extends React.Component {
    render() {

      if(!AuthenticationService.isUserLoggerIn() )
      {
     return  <Redirect to="/Login"/>
      }

      return (       <div className='popup' style={{width:'50%' } } > 
      <div  >

      <section style={{ borderBottomColor:'grey'}}>
     
     
  <div className="container py-3" bg="success"> 
    <div className="card">
      <div className="row">

      <h1 style={{ justifyContent:'center' , alignItems:'center'}}> 
      <div className="col-md-6" style={{verticalAlign:'center'}}>
      Teacher Profile
</div>
      <Button onClick={this.props.closePopup} style={{alignSelf:'right', alignItems:'right' , alignItems:'right', alignContent:'right',justifyContent:'right'}}>Go back</Button>

      </h1>
      <div className="col-md-1" style={{verticalAlign:'center'}}>

      </div>

        <div className="col-md-2" style={{verticalAlign:'center'}}>
       
            <img src={theData.photo}  className="w-100" style={{ width: '120px' , height:'130px' ,verticalAlign:'center',border: '3px solid green' }} />
          </div>
          <div className="col-md-4" style={{verticalAlign:'center'}}>
          Dear Students, I am prof. {this.props.name} 
           {this.props.freeTextRequirement}

</div>

        

          <br>
          </br>
          <br>
          </br>
          
          <br>
          </br>
          <br>
          </br>
          

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
    <Form.Control type="text" placeholder={this.props.name}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>
  <Form.Group controlId="subjects" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Subjects</Form.Label>
    <Form.Control type="text" placeholder={this.props.subject}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="category" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Category</Form.Label>
    <Form.Control type="text" placeholder={this.props.category}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="teachingExperience" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>TeachingExperience</Form.Label>
    <Form.Control type="text" placeholder={this.props.teachingExperience}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="industrialExperience" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>IndustrialExperience</Form.Label>
    <Form.Control type="text" placeholder={this.props.industrialExperience}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="institute" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>Institute</Form.Label>
    <Form.Control type="text" placeholder={this.props.institute}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>

  <Form.Group controlId="location" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>PrimaryLocation</Form.Label>
    <Form.Control type="text" placeholder={this.props.location}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>


  <Form.Group controlId="mobile" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>ContactNumber</Form.Label>
    <Form.Control type="text" placeholder={this.props.mobile}  readOnly className="col-sm-10" style={{width:'350px'}}/>
  </Form.Group>
  <Form.Group controlId="email" className="form-group row">
    <Form.Label className="col-sm-2 col-form-label col-sm-offset-1" style={{width:'180px'}}>EmailAddress</Form.Label>
    <Form.Control type="text" placeholder={this.props.email}  readOnly className="col-sm-10" style={{width:'350px'}}/>
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

  export default connect()(TeacherProfilePopUp);
