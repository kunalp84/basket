

const defaultState = {
    teacherEnquiries: [{
        subject:'',
        category:'',
        freeTextRequirement:'',
        showPopup:false
    }]
  }


const teacherEnquiryReducer = (state =defaultState, action) => {
console.log("this reducer called"+action.type)
console.log(state.teacherEnquiries)
console.log(action.data)
switch(action.type)
{
    case 'ADD_ENQUIRY':
        console.log("Action dispatched "+action.data[0].category)
    return {
       ...state,
       teacherEnquiries:state.teacherEnquiries.concat([action.data])
   }; //state.concat([action.data])

   case 'LOAD_ENQUIRY':
       console.log("&&&&&&&Inside the swtich case LOAD enquiriws")
          return  {
                    ...state,
                    teacherEnquiries:state.teacherEnquiries.concat([
                        {
                           name: 'Student.Yogesh',
                           subjects: 'Microprocessor 8086 ',
                           category: 'Engineering',
                           fans: '256',
                           photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg' ,   
                           freeTextRequirement:'I need best possible coaching for subject and also to help me complete my assignments' 
                        },
                        {
                            name: 'Prof.PK',
                            subjects: 'PCOM DCOM ',
                            category: 'Engineering',
                            fans: '256',
                            photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg' ,
                                               freeTextRequirement:'I need best possible coaching for subject and also to help me complete my assignments'     
                         },
                         {
                            name: 'Prof.Yogesh Prabhuu',
                            subjects: 'DSP, MATH',
                            category: 'Engineering',
                            fans: '10000',
                            photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg' ,  
                            
                           freeTextRequirement:'I need best possible coaching for subject and also to help me complete my assignments'  
                         },
                         {
                            name: 'Prof.Yogesh Prabhuo',
                            subjects: 'DSP, MATH',
                            category: 'Engineering',
                            fans: '10000',
                            photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg',
                            
                           freeTextRequirement:'I need best possible coaching for subject and also to help me complete my assignments'     
                         },
                         {
                            name: 'Prof.Yogesh Prabhuc',
                            subjects: 'DSP, MATH',
                            category: 'Engineering',
                            fans: '10000',
                            photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg' ,
                            
                           freeTextRequirement:'I need best possible coaching for subject and also to help me complete my assignments'    
                         }
                         
                ]),
                showPopup:false,
                pageToBeFetched:0

            }
            case 'TOGGLE_POPUP':
                return {
                       ...state,
                       showPopup:action.data

                }
            case 'LOAD_MORE':
                console.log("you are scrolling......"+action.data)
                return {
                    ...state,
                    pageToBeFetched:action.data+1,
                    teacherEnquiries:state.teacherEnquiries.concat([
                        {
                           name: 'Student.Yogesh Thi one is more',
                           subjects: 'Microprocessor 8086 - more pipeline',
                           category: 'Engineering',
                           fans: '256',
                           photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg' ,   
                           freeTextRequirement:'I need best possible coaching for subject and also to help me complete my assignments' 
                        }])
                }


    default:
        return state
}


}
export default teacherEnquiryReducer;