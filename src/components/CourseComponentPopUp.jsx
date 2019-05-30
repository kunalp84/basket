import React, { Component } from 'react';
import Button from 'react-bootstrap/Button' 
import ReactTable from 'react-table'
import Form from 'react-bootstrap/Form'
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"



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



class CourseComponentPopUp extends React.Component {

  constructor(props)
  {
      super(props)
      this.state ={ 
        nowShowing:''
       
  }   
  this.changeNowShowing = this.changeNowShowing.bind(this)
 
}


  changeNowShowing(url)
  {
      this.setState({nowShowing:url},() => {console.log(this.state.nowShowing)})
      this.refs.player.play();
  }


    render() {
      return (       <div className='popup' style={{width:'40%'} } > 
      <div  >

      <section style={{ borderBottomColor:'grey'}}>
     
     
  <div className="container py-3" bg="success"> 
    <div className="card">
      <div className="row">

      <h2 style={{ justifyContent:'center' , alignItems:'center'}}> 
      <div className="col-md-4" style={{verticalAlign:'center'}}>
      Course Details 
      </div>

      <div className="col-md-1" style={{verticalAlign:'center'}}>

      </div>
      <Button onClick={this.props.closePopup} style={{alignSelf:'right', alignItems:'right' , alignItems:'right', alignContent:'right',justifyContent:'right'}}>Go back</Button>


     
      </h2>
      <div className="col-md-1" style={{verticalAlign:'center'}}>
      <h3><span className="label label-pill label-danger">{this.props.title}</span></h3>
      </div>
      <br>
    </br>
    <br>
    </br>
    <br>
    </br>
     
      <div className="col-md-4" style={{width:'500px', height:'80px'}}>
      <Player ref="player" autoPlay
      src={this.state.nowShowing}
     width='100%'
     height='100%'
     
    />
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

    <div className="col-md-8 scrollable">
    <table className="TFtable">
      <tbody>
        <tr>
          <th  >Title</th>
          <th >Status</th>
          <th >Action</th>

        </tr>
        

        {
          this.props.videos.map( (video) =>  (<tr key={video.title}>  
                <td>{video.title}</td>
                <td >{video.userStatus}</td>
                <td > 
                  <Button onClick={()=> this.changeNowShowing(video.theLink)}>START</Button>
                </td>
          </tr>)
        )
      }
</tbody>
</table>
</div>
</div>
      </div>


    </div>
   
</section>







          



</div>
    </div>


 
        );
    }
  }

  export default CourseComponentPopUp