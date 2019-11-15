

const defaultState = {
    profile: []
  }


const registrationReducer = (state =defaultState, action) => {
console.log("this reducer called"+action.type)
console.log(state.profile)
console.log(action.data)
switch(action.type)
{
    
   case 'LOAD_PROFILE':
       console.log("&&&&&&&Loading existing profile")
       console.log(action.data)
          return  {
                    ...state,
                    profileUpdateStatus: true,
                    profile: {
                    name:"test",
                    password:"event.target.password.value",
                    emailId:"event.target.emailId.value",
                   category:"event.target.category.value",
                   mobile:"event.target.mobile.value",
                   subject:"event.target.subject.value",
                    freeTextRequirement:"event.target.freeTextRequirement.value"
                }
                          
            }

            case 'ADD_PROFILE':
                console.log("&&&&&&&Creating new profile")
                // the stte returned  is of no use
                   return  {
                             ...state,
                             profileUpdateStatus:true
                                                            
                     }
// the state returned is of no use except status

                     case 'EDIT_PROFILE':
                        console.log("&&&&&&&Existing Profile"+action.data)
                        console.log(action.data)
                           return  {
                                     ...state,
                                     profileUpdateStatus:true

                                          
                                 
                             }
           

    default:
        return state
}


}
export default registrationReducer;