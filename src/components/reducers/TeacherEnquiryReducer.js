


const defaultState = {
    teacherEnquiries: [],
    size:10,
    start:0,
    totalHits:0,
    pageToBeFetched:0
  }


const teacherEnquiryReducer = (state =defaultState, action) => {

console.log("this reducer called"+action.type)
console.log(state.teacherEnquiries)
console.log(action.data)
switch(action.type)
{
    case 'ADD_ENQUIRY_FOR_BATCH':
      //  console.log("Action dispatched "+action.data[0].category)
        var responseMessage="NATTTT"
       // console.log("JSON message  "+JSON.stringify(action.data[0]))
       // const dataSent={ batchrequest:JSON.stringify(action.data[0]) };
         
         


        
        responseMessage = "OK"
        console.log("HERE ######################"+responseMessage)
    return {
       ...state,
  //     teacherEnquiries:state.teacherEnquiries.concat([action.data]),
       responseMessage:responseMessage
   }; //state.concat([action.data])

   case "RESET_ENQUIRY_LIST_PAGE":
    return defaultState;

   case 'LOAD_ENQUIRY':
       console.log("&&&&&&&Inside the swtich case LOAD enquiriws TEACHER ENQUIRY LOAD ENQUIRY")
          return  {
                 //   ...state,
                  
                 
             //    teacherEnquiries:state.teacherEnquiries.concat(
              //        action.data.nextElements
                        /*[
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
                         
                ]*/ //),
                teacherEnquiries:action.data.nextElements,
                showPopup:false,
                pageToBeFetched:0,
                size:10,
                start:10,
                totalHits:action.data.totalRecords

            }
            case 'TOGGLE_POPUP':
                return {
                       ...state,
                       showPopup:action.data

                }
            case 'LOAD_MORE':
                console.log("TEACHER ENQUIRY LOAD_MORE you are scrolling......"+action.data)
                console.log(action.data)
                return {
                    ...state,
                    pageToBeFetched:action.data.pageToBeFetched+1,
                    size:action.data.size,
                    start:Number(action.data.start)+Number(action.data.size),
                    totalHits:action.data.totalRecords,

                    teacherEnquiries:state.teacherEnquiries.concat(
                      action.data.nextElements
                        /*[
                        {
                           name: 'Student.Yogesh Thi one is more',
                           subjects: 'Microprocessor 8086 - more pipeline',
                           category: 'Engineering',
                           fans: '256',
                           photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg' ,   
                           freeTextRequirement:'I need best possible coaching for subject and also to help me complete my assignments' 
                        }]*/    )
                      //  teacherEnquiries: action.data.nextElements
                }


    default:
        return state
}


}
export default teacherEnquiryReducer;