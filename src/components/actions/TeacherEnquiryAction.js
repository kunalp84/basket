import axios from 'axios';
import AuthenticationService from '../services/AuthenticationService';

//export default function create(values) 

const createAction = (props, values) => {

    console.log("Inside Create Action "+JSON.stringify(values[0]) )

        

   // return (dispatch) => {
      // dispatch({type: CREATE_ORGANIZATION});
    axios.post(`http://localhost:8080/batchRequestController/submitBatchRequest`,  JSON.stringify(values[0])  ,  {
    headers: {
        'Content-Type': 'application/json',
         authorization: AuthenticationService.getToken()
    }})
          .then((res) =>{
            console.log(res);
            console.log("****** just calling dispatch*****")
            console.log(res.data.items);
              props.dispatch({type: 'ADD_ENQUIRY_FOR_BATCH', data:res});
          })
          .catch((error)=> {
              props.dispatch({type: 'FAIL_ADD_ENQUIRY_FOR_BATCH', data: error});
          })
   // }
  
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