import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import CourseComponentPopUp from './CourseComponentPopUp'
import Popup from "reactjs-popup";



class CourseComponent extends Component
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
        this.refreshSingleTeacher(); /** Get the data and put it in a state*/
        console.log(this.state)
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
              <Button variant="primary" className='btn-info' onClick={this.togglePopup.bind(this)}> View Course`</Button> {' '}
             
              {this.state.showPopup ? 
            <CourseComponentPopUp
              text='Course Details'
              title ={this.props.name}
              videos ={this.props.videos}
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

export default CourseComponent