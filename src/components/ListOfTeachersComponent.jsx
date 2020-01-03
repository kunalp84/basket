import React, { Component } from 'react';
import TeacherComponent from './TeacherComponent'
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import ReduxLazyScroll from 'redux-lazy-scroll'
import {connect} from 'react-redux';
import createActionTeacherListView from './actions/LoadTeacherListViewAction';



class ListOfTeachersComponent extends Component
{
    constructor(props)
    {
        super(props)
        console.log("inside constructor listOFTeachers" + this.state)


        this.refreshTeacherData = this.refreshTeacherData.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this._loadMore = this._loadMore.bind(this)
       
    }

    componentDidMount() {
        console.log('componentDidMount - for List of Teachers ')
  /*
        this.props.dispatch({
          type:'LOAD_TEACHERS',
          data:[] 
      })*/
      //window.addEventListener('scroll', this._loadMore, false);
  
        //console.log(this.state)
        console.log("end of did mount")
    }
  
     
    _loadMore() {
     console.log("Load More function called") 
     // this.props.dispatch(  {type:"LOAD_MORE_TEACHERS" , data: this.props.teacherPageToBeFetched} )
     createActionTeacherListView(this.props)
    }
   

    
    hasMoreElements(){
        if(this.state.noOfElements<6)
        {
            this.setState({noOfElements:6})
            return true;
        }
        return false;
    }

/** This methd is no more used */
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
      //  this.setState({teachers:theData}, () => {console.log(this.state.teachers)})

       // this.setState({teacherComponentArray: theData.map(teacher => <TeacherComponent key={Math.random()} photo={teacher.photo} name={teacher.name} subjects={teacher.subjects} fans={teacher.fans} category={teacher.category} ></TeacherComponent>)
    //})


console.log('*****1  '+this.state.pageNumber)
     //   this.setState((prevState) => ({
 //           pageNumber: prevState.pageNumber + 1
  //      }));

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
    
      /*  this.setState({teacherComponentArray: this.state.teacherComponentArray.concat (
            newArray.//filter(teacherCandidate => teacherCandidate.subjects.includes(this.props.customFilter)).
            map(teacher => <TeacherComponent key={teacher.name} photo={teacher.photo} name={teacher.name} 
               subjects={teacher.subjects} fans={teacher.fans} category={teacher.category} >
                  </TeacherComponent>)
        )})*/
    
    
        
       

 
 console.log("Refresh data called -pre inc"+this.state.pageNumber)

       // this.setState({noOfElements:5})  
     /*   this.setState((prevState) => ({
            pageNumber: prevState.pageNumber + 1
        }));*/
    
        console.log("Refresh data called -out "+this.state.pageNumber)


    }
}

 render() {
        console.log('Filter from Example auto suggest'+this.props.customFilter)

    return (
   <div style={{height:'900px', overflow:'auto'}}>
  <ReduxLazyScroll
         // isFetching={false}
         // errorMessage={"Error"}
          loadMore={this._loadMore}
          hasMore={Number(this.props.start) <= Number(this.props.totalHits)}
                   isParentScrollable={true}
        >
    
    {
//        this.state.teacherComponentArray
        this.props.teacherList.map(teacher => <TeacherComponent key={teacher.name} 
            name={teacher.name}
            institute ={teacher.institute}
              location={teacher.location}
              industrialExperience={teacher.industrialExperience}
              teachingExperience={teacher.teachingExperience}
            /*photo={teacher.photo}*/ name={teacher.name} 
            subjects={teacher.subject} 
            emailId={teacher.emailId} 
            category={teacher.category} 
            mobile={teacher.mobile} 
            freeTextRequirement={teacher.freeTextRequirement}></TeacherComponent>)


        /*    this.state.teachers.filter(teacherCandidate => teacherCandidate.subjects.includes(this.props.customFilter)).
         map(teacher => <TeacherComponent key={teacher.name} photo={teacher.photo} name={teacher.name} 
            subjects={teacher.subjects} fans={teacher.fans} category={teacher.category} >
               </TeacherComponent>)*/
    }

    
    </ReduxLazyScroll>
    </div>
    )
           
}  



}


//export default ListOfTeacherEnquiries

const mapStateToProps = (state,ownProps) => {
    console.log("$$$ state  "+state)  
    console.log(state)
    console.log("OwnProps"+ownProps)
      console.log("Inside for TeacherListView mapStateToProps - list of teacher components" + state.teacherListReducer.teacherList)
  
      return {
          teacherList: state.teacherListReducer.teacherList || [{subject:'', freeTextRequirement:'', id:''}],
          pageToBeFetched: state.teacherListReducer.teacherPageToBeFetched || 0,
          start: state.teacherListReducer.start || 0,
         size: state.teacherListReducer.size || 0,
        totalHits:state.teacherListReducer.totalHits || 0
      }
  
  } 
  export default connect(mapStateToProps)(ListOfTeachersComponent);

