import React, { Component } from 'react';
import TeacherEnquiry from './TeacherEnquiry'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReduxLazyScroll from 'redux-lazy-scroll'
import createActionTeacherEnquiryView from './actions/LoadTeacherEnquiryViewAction';


class ListOfTeacherEnquiries extends Component
{
    constructor(props)
    {
        super(props)
        

        console.log("inside constructi" + this.state)


        this.refreshTeacherData = this.refreshTeacherData.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this._loadMore = this._loadMore.bind(this)
        this.setRootRef = this.setRootRef.bind(this);


    }


  
  
    componentDidMount() {
      console.log('componentDidMount - Single Teacher')

      /*this.props.dispatch({
        type:'LOAD_ENQUIRY',
        data:[] 
    })*/
    //createActionTeacherEnquiryView(this.props)
    // *** create a LOAD_ENQUIRY action
     //pass size= 10 and start=1 

    //window.addEventListener('scroll', this._loadMore, false);

      //console.log(this.state)
      console.log("end of did mount")
  }

   
  _loadMore() {
   console.log("Load More function called") 
   // this.props.dispatch(  {type:"LOAD_MORE" , data:{  pageToBeFetched:this.props.pageToBeFetched, start:this.props.start, size:this.props.size} } )
  // if(this.props.start>0)
   //{
    //if(this.props.size+ start+1 <)
    console.log(this.props.start)
    console.log(this.props.totalHits)

    
    createActionTeacherEnquiryView(this.props)
    
   // else
    //{
   //   console.log("Further scrolling not possible *******")
  //  }
   //}
    // *** create a LOAD_ENQUIRY action
     //pass size= 10 and start=start+size
  }
    
    hasMoreElements(){
        if(this.state.noOfElements<6)
        {
            this.setState({noOfElements:6})
            return true;
        }
        return false;
    }

    setRootRef(element) {
      this.rootRef = element;
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
        ]
       // this.setState({teachers:this.props.posts}, () => {console.log(this.state.teachers)})

        //this.setState({teacherComponentArray: theData.map(teacher => <TeacherEnquiry key={teacher.name} photo={teacher.photo} name={teacher.name} subjects={teacher.subjects} fans={teacher.fans} category={teacher.category} freeTextRequirement={teacher.freeTextRequirement} ></TeacherEnquiry>)
      //  this.setState({teacherComponentArray: this.props.teacherEnquiries.map(teacher => <TeacherEnquiry subjects={teacher.subject}  freeTextRequirement={teacher.freeTextRequirement} ></TeacherEnquiry>)
    
   // })


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
           name: ` Student Prof.Pankaj ${this.state.pageNumber}`,
           subjects: 'MP,CG,AMP ',
           category: 'Engineering',
           fans: '256',
           photo:'https://images-na.ssl-images-amazon.com/images/I/61aaWA5eI8L.jpg' ,
           
           freeTextRequirement:'I need best possible coaching for subject and also to help me complete my assignments'    
        }]
    
       // this.setState({teacherComponentArray: 
           // newArray.//filter(teacherCandidate => teacherCandidate.subjects.includes(this.props.customFilter)).
           //replace this with newArray to undo this.state.teacherComponentArray.concat (
         //  this.props.teacherEnquiries.
           
           // map(teacher => <TeacherEnquiry key={teacher.name} photo={teacher.photo} name={teacher.name} 
             //  subjects={teacher.subjects} fans={teacher.fans} category={teacher.category} freeTextRequirement={teacher.freeTextRequirement}>
               //   </TeacherEnquiry>)
       // })
    
    
        
       

 
 console.log("Refresh data called -pre inc"+this.state.pageNumber)

       // this.setState({noOfElements:5})  
     //   this.setState((prevState) => ({
       //     pageNumber: prevState.pageNumber + 1
        //}));
    
        console.log("Refresh data called -out "+this.state.pageNumber)


    }
}

 render() {
        console.log('Filter from Example auto suggest'+this.props.customFilter)

        //this.props.dispatch({type: 'RESET_ENQUIRY_LIST_PAGE', data:[]});


    return (
      <div style={{height:'900px', overflow:'auto'}} >

  
  <ReduxLazyScroll
         // isFetching={false}
         // errorMessage={"Error"}
          loadMore={this._loadMore}
         hasMore={Number(this.props.start) <= Number(this.props.totalHits)}
         isParentScrollable={true}
        >
    {
      this.props.teacherEnquiries.map(teacher => <TeacherEnquiry key={teacher.id} subjects={teacher.subjectName}  freeTextRequirement={teacher.requirement} category={teacher.category}></TeacherEnquiry>)
      //this.props.teacherEnquiries.map(teacher => <TeacherEnquiry key={Math.random()} subjects={teacher.subjects}  freeTextRequirement={teacher.freeTextRequirement} ></TeacherEnquiry>)
      /*    this.state.teachers.filter(teacherCandidate => teacherCandidate.subjects.includes(this.props.customFilter)).
         map(teacher => <TeacherComponent key={teacher.name} photo={teacher.photo} name={teacher.name} 
            subjects={teacher.subjects} fans={teacher.fans} category={teacher.category} >
               </TeacherComponent>)
               
                <InfiniteScroll
      items={this.props.teacherEnquiries.map(teacher => <TeacherEnquiry key={Math.random()} subjects={teacher.subjects}  freeTextRequirement={teacher.freeTextRequirement} ></TeacherEnquiry>)} 
     loadMore={this._loadMore.bind(this)} 
      hasMore={true}
    />*/
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
    console.log("i222nside mapStateToProps - list of teacher enquiries" + state.teacherEnquiryReducer.teacherEnquiries)

    return {
        teacherEnquiries: state.teacherEnquiryReducer.teacherEnquiries || [{subject:'', freeTextRequirement:'', id:''}],
        pageToBeFetched: state.teacherEnquiryReducer.pageToBeFetched || 0,
        start: state.teacherEnquiryReducer.start || 0,
        size: state.teacherEnquiryReducer.size || 0,
        totalHits:state.teacherEnquiryReducer.totalHits || 0
    }

} 
export default connect(mapStateToProps)(ListOfTeacherEnquiries);