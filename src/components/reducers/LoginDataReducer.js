
import AuthenticationService from '../services/AuthenticationService.js'
const defaultState = {
        loginData: []
      }
    
    
    const loginDataReducer = (state =defaultState, action) => {
    console.log("this reducer called"+action.type)
    console.log(state.loginData)
    console.log(action.data)
    switch(action.type)
    {
        case 'CHECK_LOGIN':
       console.log("Action dispatched ")
            console.log(action)
    
            if(action.data.output.data.message==="OK")
                {
                   AuthenticationService.registerSuccessfulLogin(action.data.userid,action.data.password)
                return {
                        ...state,
                        isLoginSuccess:true
                    }; //state.concat([action.data])
                }
                return {
                    ...state,
                    isLoginSuccess:false
                }; //state.concat([action.data])
    
        default:
            return state
    }
    
    
    }
    export default loginDataReducer;
    