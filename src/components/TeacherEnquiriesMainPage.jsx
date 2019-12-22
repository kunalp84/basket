import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react';
import ListOfTeacherEnquiries from './ListOfTeacherEnquiries'
import theme from '../theme.css'
import {connect} from 'react-redux';



// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'Computer',
    year: 1972
  },
  {
    name: 'Comps',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  }
  
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class TeacherEnquiriesMainPage extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {

    setTimeout(() => {
     // this.props.getSearchForItems(newValue);
     console.log("Dummy timeout for typing speed of users")
    }, 300);
    
    this.setState({
      value: newValue
    }); 

    console.log("New state is set")
    
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    if(value.length>3) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    this.props.dispatch({type: 'RESET_ENQUIRY_LIST_PAGE', data:[]});

    const inputProps = {
      placeholder: 'Type atleast 3 characters of a  Course or a Subject Name',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
        <div className='who-cares'> 
      
      <br> 
      </br>
      
      
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
       
      />
      <br> 
      </br>
      <br> 
      </br>
      
      <ListOfTeacherEnquiries customFilter={this.state.value}></ListOfTeacherEnquiries>
    </div>
    );
  }
}

//export default TeacherEnquiriesMainPage
export default connect()(TeacherEnquiriesMainPage);