class AuthenticationService {


  registerSuccessfulLogin= (userName) =>{
        console.log("putting user in session storage")
        sessionStorage.setItem("userId",userName)
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

}
export default new AuthenticationService