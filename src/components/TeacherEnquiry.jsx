import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Popup from "reactjs-popup";
import StudentContactPopUp from './StudentContactPopUp';
import {connect} from 'react-redux';
import AuthenticationService from './services/AuthenticationService';
import {Redirect} from 'react-router-dom';




class TeacherEnquiry extends Component
{
  
    constructor(props)
    {
        super(props)
       
        this.refreshSingleTeacher = this.refreshSingleTeacher.bind(this)
        this.togglePopup = this.togglePopup.bind(this)

    }

    togglePopup() {
       // this.setState({
         // showPopup: !this.state.showPopup
        //});


        this.props.dispatch({
          type:'TOGGLE_POPUP',
          data:!this.props.showPopup
      })
      }
  

    componentDidMount() {
        console.log('componentDidMount - Single Teacher')
       // this.refreshSingleTeacher(); /** Get the data and put it in a state*/
       // console.log(this.state)
    }

    refreshSingleTeacher()
    {
    //    this.setState({name:this.props.name},() => {console.log(this.state.name)})
    }



  render() {
    return (
        <>
        <div style={{border:'3px solid grey', width:'100%' , borderSpacing:'3px' , alignSelf:'right'}}> 
      
<section style={{ borderBottomColor:'grey'}}>
  <div className="container py-3" bg="success"> 
    <div className="card">
      <div className="row">
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
             
              <h4 className="card-title" style={{  textAlign:'left'  }}> Teaching Required for Course: {'  '} 
              <span className="label label-pill label-primary">{this.props.category}</span>  {'  '}          
            Subject:{'  '}
          <span className="label label-pill label-danger">{this.props.subjects}</span>              
             
              
              </h4> 
              <p className="card-text" style={{  textAlign:'left'  }}  > I need Coaching For : {this.props.freeTextRequirement} </p>
              <div className='text-left'>
              <Button variant="primary" className='btn-info' onClick={this.togglePopup.bind(this)}> Contact Student</Button> {' '}

              

             
             
              {
             
                
                
                
                this.props.showPopup ? 
            <StudentContactPopUp
              text='Student Details'
              closePopup={this.togglePopup.bind(this)} 
             
            />
            : null
          }     
            



              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
   
</section>



        </div>
 <br></br>
</>

    )
  }
}

const mapStateToProps = (state) => {
  console.log("inside mapStateToProps of enquiry" + state.showPopup)

  return {
    showPopup: state.teacherEnquiryReducer.showPopup || false 
  }

  }
    export default connect(mapStateToProps)(TeacherEnquiry);