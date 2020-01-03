import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import TeacherProfilePopUp from './TeacherProfilePopUp'
import Popup from "reactjs-popup";
import {connect} from 'react-redux';



class TeacherComponent extends Component
{
  
    constructor(props)
    {
        super(props)
        this.state ={ name: '',
        subjects: '',
        category: '',
        fans: '',
        photo:'',
        showPopup:false
         
    }    
        this.refreshSingleTeacher = this.refreshSingleTeacher.bind(this)
        this.togglePopup = this.togglePopup.bind(this)

    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
  

    componentDidMount() {
        console.log('componentDidMount - Single Teacher')
      //  this.refreshSingleTeacher(); /** Get the data from props and put it in a state*/
        console.log(this.props)
    }

    refreshSingleTeacher()
    {
        this.setState({name:this.props.name},() => {console.log(this.state.name)})
    }



  render() {
    return (
        <>
        <div style={{border:'3px solid grey', width:'100%' , borderSpacing:'3px' , alignSelf:'right'}}> 
      
<section style={{ borderBottomColor:'grey'}}>
  <div className="container py-3" bg="success"> 
    <div className="card">
      <div className="row">
        <div className="col-md-2" style={{verticalAlign:'center'}}>
            <img src={this.props.photo}  className="w-100" style={{ width: '120px' , height:'130px' ,verticalAlign:'center',border: '3px solid green' }} />
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title" style={{  textAlign:'left'  }}   >{this.props.name}</h4> 
              <p className="card-text" style={{  textAlign:'left'  }}  > My Subjects are : {this.props.subjects} </p>
              <p className="card-text" style={{  textAlign:'left'  }}  > My Courses are : {this.props.category}</p>
              <div className='text-left'>
              <Button variant="primary" className='btn-success' >Contact Teacher</Button> {' '}
              <Button variant="primary" className='btn-info' onClick={this.togglePopup.bind(this)}> Full Profile</Button> {' '}
              <Button variant="primary" className='btn-warning'>View batches</Button> {'           '}
              {this.props.fans} appreciations
              <Button variant="primary" className='btn-link'>Send Appreciation</Button>
             
              {this.state.showPopup ? 
            <TeacherProfilePopUp
              text='Teacher Profile'
              name={this.props.name}
              email={this.props.emailId}
              subject={this.props.subjects}
              freeTextRequirement={this.props.freeTextRequirement}
              mobile={this.props.mobile}
              institute ={this.props.institute}
              location={this.props.location}
              industrialExperience={this.props.industrialExperience}
              teachingExperience={this.props.teachingExperience}
              category={this.props.category}
              mode ="BY_OTHER"
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
  console.log("inside mapStateToProps of enquiry state.teacherListReducer.showPopup" + state.showPopup)

  return {
    showPopup: state.teacherListReducer.showPopup || false 
  }

  }
    export default connect(mapStateToProps)(TeacherComponent);


