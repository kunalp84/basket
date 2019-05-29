import React, { Component } from 'react';
import TeacherComponent from './TeacherComponent'
import InfiniteScroll from 'react-infinite-scroller';

class ListOfTeachersComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            teachers: [],
            message: null,
            noOfElements:0,
            //hasMore:true,
            pageNumber:1,
            totalPages:5,
            totalRecords:50,
            teacherComponentArray:[]
           
           
           

        }

        this.refreshTeacherData = this.refreshTeacherData.bind(this)
       
    }

   

    
    hasMoreElements(){
        if(this.state.noOfElements<6)
        {
            this.setState({noOfElements:6})
            return true;
        }
        return false;
    }


    refreshTeacherData() {
    //    let username = AuthenticationService.getLoggedInUserName()
       // TodoDataService.retrieveAllTodos(username)
         //   .then(
           //     response => {
                    //console.log(response);
             //       this.setState({ todos: response.data })
               // }
            //)
console.log('Inside refresh method with state page'+this.state.pageNumber)

if(this.state.pageNumber===1) { 
        const theData = [
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
        ]
        this.setState({teachers:theData}, () => {console.log(this.state.teachers)})

        this.setState({teacherComponentArray: theData.map(teacher => <TeacherComponent key={teacher.name} photo={teacher.photo} name={teacher.name} subjects={teacher.subjects} fans={teacher.fans} category={teacher.category} ></TeacherComponent>)
    })


console.log('*****1  '+this.state.pageNumber)
        this.setState((prevState) => ({
            pageNumber: prevState.pageNumber + 1
        }));

console.log('*****2   '+this.state.pageNumber)

    }
else if(this.state.pageNumber>1) {
    console.log("PUSHING MORE DATA")
    
    var waitTill = new Date(new Date().getTime() + 1 * 10);
    while(waitTill > new Date()){}

    const newArray = [
        {
           name: `Prof.Pankaj ${this.state.pageNumber}`,
           subjects: 'MP,CG,AMP ',
           category: 'Engineering',
           fans: '256',
           photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg'     
        }]
    
        this.setState({teacherComponentArray: this.state.teacherComponentArray.concat (
            newArray.//filter(teacherCandidate => teacherCandidate.subjects.includes(this.props.customFilter)).
            map(teacher => <TeacherComponent key={teacher.name} photo={teacher.photo} name={teacher.name} 
               subjects={teacher.subjects} fans={teacher.fans} category={teacher.category} >
                  </TeacherComponent>)
        )})
    
    
        
       

 
 console.log("Refresh data called -pre inc"+this.state.pageNumber)

       // this.setState({noOfElements:5})  
        this.setState((prevState) => ({
            pageNumber: prevState.pageNumber + 1
        }));
    
        console.log("Refresh data called -out "+this.state.pageNumber)


    }
}

 render() {
        console.log('Filter from Example auto suggest'+this.props.customFilter)

    return (
   <div style={{height:'500px', overflow:'auto'}}>
    <InfiniteScroll
         pageStart={0}
         loadMore={this.refreshTeacherData}
         hasMore={this.state.pageNumber<=500}
         loader={<div className="loader" key={0}>Loading ...</div>}
         useWindow={false}
         getScrollParent={() => this.scrollParentRef}
         >
    {
        this.state.teacherComponentArray
     /*    this.state.teachers.filter(teacherCandidate => teacherCandidate.subjects.includes(this.props.customFilter)).
         map(teacher => <TeacherComponent key={teacher.name} photo={teacher.photo} name={teacher.name} 
            subjects={teacher.subjects} fans={teacher.fans} category={teacher.category} >
               </TeacherComponent>)*/
    }

    
    </InfiniteScroll>
    </div>
    )
           
}  



}

export default ListOfTeachersComponent