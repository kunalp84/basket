import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import teacherEnquiryReducer from './TeacherEnquiryReducer'
import studentDataReducer from './StudentDataReducer'
import loginDataReducer from './LoginDataReducer'


const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  loginDataReducer:loginDataReducer,
  studentDataReducer:studentDataReducer,
  teacherEnquiryReducer:teacherEnquiryReducer,
  form: formReducer
})

  

export  default rootReducer