

const defaultState = {
    profile: {}
  }


const registrationReducer = (state =defaultState, action) => {
console.log("this reducer called"+action.type)
console.log(state.profile)
console.log(action.data)
switch(action.type)
{
    //was LOAD_PROFILE
   case 'SUCCESS_GET_USER_PROFILE_DATA':
       console.log("&&&&&&&Loading existing profile")
       console.log(action.data)
          return  {
                    ...state,
                    profileUpdateStatus: true,
                    profile: {
                    name:action.data.data.items.name,
                    password:action.data.data.items.password,
                    emailId:action.data.data.items.emailId,
                   category:action.data.data.items.category,
                   mobile:action.data.data.items.mobile,
                   subject:action.data.data.items.subject,
                    freeTextRequirement:action.data.data.items.freeTextRequirement,
                    userType:action.data.data.items.userType,
                    confirmpassword:action.data.data.items.confirmpassword,
                    location:action.data.data.items.location,
                    
                    teachingExperience:action.data.data.items.teachingExperience,
                    industrialExperience:action.data.data.items.industrialExperience,
                   // location:action.data.items.location,
                    


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