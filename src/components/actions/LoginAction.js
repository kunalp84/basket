import axios from 'axios';

//export default function create(values) 

const createActionLogin = (props,loginData) => {

   // console.log("Inside Create Action "+JSON.stringify(values[0]) )

    //loginData[0].userid+" "+loginData[0].password

   // return (dispatch) => {
      // dispatch({type: CREATE_ORGANIZATION});
      axios.get(`http://localhost:8080/basicauth`,
      { headers: { authorization: 'Basic ' + window.btoa(loginData[0].userid + ":" + loginData[0].password) } })
          .then((res) =>{
            console.log(res);
            console.log("****** Back from Login check*****")
            console.log(res);
              props.dispatch({type: 'CHECK_LOGIN', data:{output:res,userid:loginData[0].userid, password:loginData[0].password} });
          })
          .catch((error)=> {
              props.dispatch({type: 'CHECK_LOGIN', data: {output:error,userid:loginData[0].userid,password:loginData[0].password} });
          })
   // }
  
  }
export default createActionLogin;
 

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