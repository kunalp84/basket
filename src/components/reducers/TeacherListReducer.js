

const defaultState = {
    teacherList: [],
    size:10,
    start:0,
    totalHits:0,
    pageToBeFetched:0
  }


const teacherListReducer = (state =defaultState, action) => {
console.log("this reducer called"+action.type)
console.log(state.teacherList)
console.log(action.data)
switch(action.type)
{
    
   case 'LOAD_TEACHERS':
       console.log("&&&&&&&Inside the swtich case LOAD TEACHERS TEACHER LIST - LOAD_TEACHERS")
          return  {
                 /*   ...state,
                    teacherList:state.teacherList.concat([
                        {
                            name: 'Prof.Pankaj',
                            subjects: 'MP,CG,AMP ',
                            category: 'Engineering',
                            fans: '256',
                            photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg'     
                         },
                         {
                             name: 'Prof.PK',
                             subjects: 'PCOM DCOM ',
                             category: 'Engineering',
                             fans: '256',
                             photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg'      
                          },
                          {
                             name: 'Prof.Yogesh Prabhuu',
                             subjects: 'DSP, MATH',
                             category: 'Engineering',
                             fans: '10000',
                             photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg'     
                          },
                          {
                             name: 'Prof.Yogesh Prabhuo',
                             subjects: 'DSP, MATH',
                             category: 'Engineering',
                             fans: '10000',
                             photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg'     
                          },
                          {
                             name: 'Prof.Yogesh Prabhuc',
                             subjects: 'DSP, MATH',
                             category: 'Engineering',
                             fans: '10000',
                             photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg'     
                          }
                         
                ]),*/
                teacherList:action.data.nextElements,
                showPopup:false,
                pageToBeFetched:0,
                size:10,
                start:10,
                totalHits:action.data.totalRecords,
                showPopup:false,
                teacherPageToBeFetched:0

            }
            case 'TOGGLE_POPUP_TEACHERS':
                return {
                       ...state,
                       showPopup:action.data

                }

             case 'RESET_TEACHER_LIST_PAGE':
                 return defaultState;
                   
             
            case 'LOAD_MORE_TEACHERS':
                console.log(" TeacherListReducer LOAD_MORE_TEACHERS you are scrolling......"+action.data)
                return {
                    ...state,
                    pageToBeFetched:action.data.pageToBeFetched+1,
                    size:action.data.size,
                    start:Number(action.data.start)+Number(action.data.size),
                    totalHits:action.data.totalRecords,
                    showPopup:false,

                    teacherList:state.teacherList.concat(
                        action.data.nextElements

                        /*[
                     {
                           name: 'Student.Yogesh Thi one is more$$$$$',
                           subjects: 'Microprocessor 8086 - more pipeline',
                           category: 'Engineering',
                           fans: '256',
                           photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg' 
                        }    ]   */   )
                }


    default:
        return state
}


}
export default teacherListReducer;