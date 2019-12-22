class AuthenticationService {


  registerSuccessfulLogin= (userName,password) =>{
        console.log("putting user in session storage")
        sessionStorage.setItem("userId",userName)
        sessionStorage.setItem("userToken", window.btoa(userName + ":" + password) )
    }

    logout = ()=> {
        sessionStorage.removeItem("userId")
    }

    isUserLoggerIn =() =>
    {
        let user = sessionStorage.getItem("userId")
        if(user===null)
        {
            return false
        }
       
        return true
    }

    getUser()
    {
        return sessionStorage.getItem("userId")
    }

    getToken()
    {
        return 'Basic ' +sessionStorage.getItem("userToken")
    }

}
export default new AuthenticationService