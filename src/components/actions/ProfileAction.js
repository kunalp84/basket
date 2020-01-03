import axios from 'axios';
import AuthenticationService from '../services/AuthenticationService';

//export default function create(values) 

const createAction = (props, value,mode) => {

    console.log("Inside Create Action "+JSON.stringify(value) )

        
if(mode === "JUST_GET_INFO") {
   // return (dispatch) => {
      // dispatch({type: CREATE_ORGANIZATION});
    axios.get(`http://localhost:8080/profileController/getUserProfileData/${value}`, {
    headers: {
        'Content-Type': 'application/json',
         authorization: AuthenticationService.getToken()
    }})
          .then((res) =>{
            console.log(res);
            console.log("****** just calling dispatch*****")
            console.log(res.data.items);
              props.dispatch({type: 'SUCCESS_GET_USER_PROFILE_DATA', data:res});
          })
          .catch((error)=> {
              props.dispatch({type: 'FAIL_GET_USER_PROFILE_DATA', data: error});
          })
   // }
  }
  else if(mode ==='EXISTING_USER_UPDATE')
  { 
    // this is either create or update profile , server will decide based on the mode passed.
    axios.post(`http://localhost:8080/profileController/profileDataUpdate`,  JSON.stringify(value)  ,  {
      headers: {
          'Content-Type': 'application/json',
           authorization: AuthenticationService.getToken()
      }})
            .then((res) =>{
              console.log(res);
              console.log("****** just calling dispatch*****")
              console.log(res.data.items);
                props.dispatch({type: 'SUCCESS_GET_USER_PROFILE_DATA', data:res});
            })
            .catch((error)=> {
                props.dispatch({type: 'FAIL_GET_USER_PROFILE_DATA', data: error});
            })
  }
  else if(mode==='NEW_USER_REGISTRATION') {
    axios.post(`http://localhost:8080/profileController/profileDataAdd`,  JSON.stringify(value)  ,  {
      headers: {
          'Content-Type': 'application/json'
           //authorization: AuthenticationService.getToken()
      }})
            .then((res) =>{
              console.log(res);
              console.log("****** just calling dispatch*****")
              console.log(res.data.items);
                props.dispatch({type: 'SUCCESS_GET_USER_PROFILE_DATA', data:res});
            })
            .catch((error)=> {
                props.dispatch({type: 'FAIL_GET_USER_PROFILE_DATA', data: error});
            })

  }

  }
export default createAction;
 

  /*axios.post(`http://localhost:8080/batchRequestController/submitBatchRequest`,  JSON.stringify(action.data[0])  ,  {
    headers: {
        'Content-Type': 'application/json'
    }})
.then(res => {
  console.log(res);
  console.log("******")
  console.log(res.data.items);
        if(res.data.items==="OK")
                {
                    responseMessage = "OK"
                    console.log("***************HERE(((((((((("+responseMessage)
                    this.self.setState({responseMessage:"OK"})
                }
                else
                {
                    responseMessage = "NOK"

                }
  
}) */