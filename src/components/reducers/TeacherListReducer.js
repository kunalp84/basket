

const defaultState = {
    teacherList: []
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
                    ...state,
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
                         
                ]),
                showPopup:false,
                teacherPageToBeFetched:0

            }
            case 'TOGGLE_POPUP_TEACHERS':
                return {
                       ...state,
                       showPopup:action.data

                }
            case 'LOAD_MORE_TEACHERS':
                console.log(" TeacherListReducer LOAD_MORE_TEACHERS you are scrolling......"+action.data)
                return {
                    ...state,
                    teacherPageToBeFetched:action.data+1,
                    teacherList:state.teacherList.concat([
                        {
                           name: 'Student.Yogesh Thi one is more$$$$$',
                           subjects: 'Microprocessor 8086 - more pipeline',
                           category: 'Engineering',
                           fans: '256',
                           photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg' 
                        }])
                }


    default:
        return state
}


}
export default teacherListReducer;