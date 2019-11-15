import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import teacherEnquiryReducer from './TeacherEnquiryReducer'
import studentDataReducer from './StudentDataReducer'
import loginDataReducer from './LoginDataReducer'
import teacherListReducer from './TeacherListReducer'
import registrationReducer from './RegistrationReducer'



const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  registrationReducer:registrationReducer,
  teacherListReducer:teacherListReducer,
  loginDataReducer:loginDataReducer,
  studentDataReducer:studentDataReducer,
  teacherEnquiryReducer:teacherEnquiryReducer,
  form: formReducer
})

  

export  default rootReducer