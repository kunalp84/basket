//import React from 'react';
import React, { Component } from 'react';
import FirstComponent from './components/FirstComponent'
import logo from './logo.svg';
import './App.css';
import TeacherComponent from './components/TeacherComponent';
import { Layout } from 'react-layout-pane';
import { Fixed } from 'react-layout-pane';
import { Flex } from 'react-layout-pane';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Example from './components/Example'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {NavLink as RRNavLink}  from 'react-router-dom'
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import TeacherEnquiriesMainPage from './components/TeacherEnquiriesMainPage'
import RecordedCoursesMainPage from './components/RecordedCoursesMainPage';
import AskForBatchFromInvoker from './components/AskForBatchFormInvoker';
import { reduxForm, Field } from 'redux-form';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import reducer1 from './components/reducers' 

const store = createStore(reducer1)

class App extends Component {

  constructor(props)
  {
      super(props)
      this.state = {
        showSidebar:true,
        mobileView: false,
        collapsedBarForNav: true
      }
      this.updateViewState = this.updateViewState.bind(this);
      this.toggleSideBar = this.toggleSideBar.bind(this);
      this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  updateViewState() {
    if (!this.state.mobileView && document.documentElement.clientWidth < 1024) {
      this.setState({
        mobileView: true,
        showSidebar: false
      });
    } else if (document.documentElement.clientWidth > 1024) {
      this.setState({
        mobileView: false,
        showSidebar: true
      });
    }
  }

  toggleNavbar() {
    console.log('collapsed 1 '+this.state.collapsedBarForNav)
   
    this.setState({
      collapsedBarForNav:!this.state.collapsedBarForNav
    });




    console.log('collapsed 2'+this.state.collapsedBarForNav)
  }

toggleSideBar() {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  }

componentWillMount() {
    this.updateViewState();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateViewState);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewState);
  }

 


  render() {
 
  return (
    <Provider store={store}>

    <div className="App">
         {/*<TeacherComponent></TeacherComponent>
        <Layout type="column">
       <Fixed className="header">
           Fixed Header
       </Fixed>
       <Flex className="content">
      
       <Example></Example>
       </Flex>
   </Layout>

        
        */}



<Layout type="row">
       { !this.state.mobileView && <Fixed className="sidebar">
            <Layout type="column">
                <Fixed>
                    Top Left
                </Fixed>
                <Flex>
                </Flex>
                <Fixed>
                    Bottom Left
                </Fixed>
            </Layout>
        </Fixed>} 
        
        
        <Flex>
            <Layout type="column">
                
        <Fixed style={{background:'black'}} >  
        <h2 style={{color:'white' ,font:'"Walter Turncoat", cursive', fontFamily:'"Walter Turncoat", cursive'}}>   SCHOLAR BASKET 
          
          </h2> 
          <label style={{color:'white' ,font:'"Walter Turncoat", cursive', fontFamily:'"Walter Turncoat", cursive'}}> 
          contactus@scholarbasket.com
            </label>
            <Router>
     Click <RRNavLink to="/LookUpTeachers/">Here</RRNavLink>
     </Router>
             <div >
                <Navbar color="white" className="bg-dark p-4" >
          <NavbarToggler onClick={this.toggleNavbar}  style={{width:'150px', height:'40px',position:'inherit' ,background:'chocolate',fontFamily:'"Walter Turncoat", cursive', fontWeight:'bold' }} >
            MENU
            </NavbarToggler>
              
          <Collapse isOpen={!this.state.collapsedBarForNav} >
            <Nav >
              <NavItem> 
              <NavLink href="/LookUpTeachers/">Look up Teachers</NavLink>             
              </NavItem>
              
              <NavItem>
                <NavLink href="/LookUpTeacherEnquiries/">See what Students want</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/AskForBatchForm/">Ask for a Batch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Edit My Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/LookUpRecordedCourses/">Recorded Courses</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
        </div>
        </Fixed>

                

                <Flex className="content" >

                <Router>
                  <>
                  <Switch>
                <Route  path="/" exact component={Example}  />
                <Route  path="/LookUpTeachers" component={Example}  />
                <Route  path="/LookUpTeacherEnquiries" component={TeacherEnquiriesMainPage}  />
                <Route  path="/LookUpRecordedCourses" component={RecordedCoursesMainPage}  />
                <Route path="/AskForBatchForm" component={AskForBatchFromInvoker} />
                <Route  component={ErrorComponent}  />
                </Switch>
                </>
                </Router>            
                   {/*<Example></Example>*/} 
                </Flex>
             {/* !this.state.mobileView &&  <Fixed className="header">
      </Fixed> */}
            </Layout>
        </Flex>
       { !this.state.mobileView &&  <Fixed className="sidebar">
            <Layout type="column">
                <Fixed>
                    Top Right
                </Fixed>
                <Flex>
                </Flex>
                <Fixed>
                    Bottom Right
                </Fixed>
            </Layout>
      </Fixed> }
    </Layout>









       
       </div>
       </Provider>
  );
  }
}


function ErrorComponent() {
  return <div>Error Occured. The URL you entered might be invalid - Please retry. Visit our home page at wwww.scholarbasket.com</div>
}

export default App;
