import axios from 'axios';

//export default function create(values) 

const createActionTeacherEnquiryView = (props, values) => {

 //   console.log("Inside Create Action "+JSON.stringify(values[0]) )

 var startPoint, sizePoint,textFilter
        if(props.start===0)
        {
          startPoint=0
        }
        else
        {
          startPoint=Number(props.start)
        }
        if(props.size===0)
        {
          sizePoint=10   
        }
        else
        {
          sizePoint=Number(props.size)
        }
        if(props.customFilter)
        {
          textFilter= props.customFilter
        }
        else
        {
          textFilter="*"
        }

   // return (dispatch) => {
      // dispatch({type: CREATE_ORGANIZATION});
    axios.get(`http://0.0.0.0:9200/requirement/batch/_search?q=${textFilter}&from=${startPoint}&size=${sizePoint}`,  {
    headers: {
        'Content-Type': 'application/json'
    }})
          .then((res) =>{
            console.log(`http://0.0.0.0:9200/requirement/batch/_search?q=*&from=${startPoint}&size=${sizePoint}`);
            var dataRecieved =[]
            console.log("****** just calling dispatch*****")
            console.log("start="+startPoint)
            console.log("size="+sizePoint)
            res.data.hits.hits.forEach(element => {
                  
                  console.log(element._source)
                  dataRecieved.push(element._source)
                  if(startPoint===0)
                  {
                    props.dispatch({type: 'LOAD_ENQUIRY', data:dataRecieved});
                     dataRecieved =[]
                  }
                  else
                  {
                    props.dispatch({type: 'LOAD_MORE', data:{nextElements:dataRecieved, pageToBeFetched:props.pageToBeFetched, start:startPoint, size:sizePoint}  }) ;
                     dataRecieved =[]
                  }
                 
            })
             // props.dispatch({type: 'ADD_ENQUIRY_FOR_BATCH', data:res});
          })
          .catch((error)=> {
              //props.dispatch({type: 'ADD_ENQUIRY_FOR_BATCH', data: error});
          })
   // }
  
  }
export default createActionTeacherEnquiryView;
 