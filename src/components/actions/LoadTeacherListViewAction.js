import axios from 'axios';
//import React, { Component } from 'react';


//export default function create(values) 

const createActionTeacherListView = (props, values) => {
  console.log("Inside Action Method*******")
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
        if(props.customFilter && props.customFilter.length>3)
        {
              // there is a change in the value of the filter
            



            if(props.customFilter !== sessionStorage.getItem("filterForTeachers") )
              {
                console.log("Reset as change in text filter")
                props.dispatch({type: 'RESET_TEACHER_LIST_PAGE', data:[]});

                startPoint=0
                sizePoint=10  
                sessionStorage.setItem("filterForTeachers",props.customFilter)    

              
              }

              textFilter= sessionStorage.getItem("filterForTeachers")

              console.log("HITTING SERVICE to get list of TEACHERS")

              // return (dispatch) => {
                 // dispatch({type: CREATE_ORGANIZATION});
               axios.get(`http://0.0.0.0:9200/professor/PROFESSOR/_search?q=*${textFilter}*&from=${startPoint}&size=${sizePoint}`,  {
               headers: {
                   'Content-Type': 'application/json'
               }})
                     .then((res) =>{
                       console.log(`http://0.0.0.0:9200/professor/PROFESSOR/_search?q=*${textFilter}*&from=${startPoint}&size=${sizePoint}`);
                       var dataRecieved =[]
                       console.log("****** just calling dispatch*****")
                       console.log("start="+startPoint)
                       console.log("size="+sizePoint)
                       var totalRecords =   res.data.hits.total.value
                       res.data.hits.hits.forEach(element => {
                             
                             console.log(element._source)
                             dataRecieved.push(element._source)
                       })

                       if(startPoint===0)
                       {
                         props.dispatch({type: 'LOAD_TEACHERS', data:{nextElements:dataRecieved,totalRecords:totalRecords}});
                          dataRecieved =[]
                       }
                       else
                       {
                         props.dispatch({type: 'LOAD_MORE_TEACHERS', data:{nextElements:dataRecieved, pageToBeFetched:props.pageToBeFetched, start:startPoint, size:sizePoint,totalRecords:totalRecords}  }) ;
                          dataRecieved =[]
                       }
                        // props.dispatch({type: 'ADD_ENQUIRY_FOR_BATCH', data:res});
                     }
                     
                     
                     
                     )
                     .catch((error)=> {
                         //props.dispatch({type: 'ADD_ENQUIRY_FOR_BATCH', data: error});
                     })

        }
        else
        {
          console.log("----PLEASE SPECIFY TEXT FILTER OF ATLEAST 3 CHARACTERS-----")  
          props.dispatch({type: 'RESET_TEACHER_LIST_PAGE', data:[]});

               // { <span className="label label-pill label-danger">PLEASE SPECIFY TEXT FILTER OF ATLEAST 3 CHARACTERS</span> }
          return
        }
       
   // }
  
  }
export default createActionTeacherListView;
 