const teacherEnquiryReducer = (state = [], action) => {

switch(action.type)
{
    case 'ADD_ENQUIRY':
    return state.concat([action.data])
    default:
        return state
}


}
export default teacherEnquiryReducer;