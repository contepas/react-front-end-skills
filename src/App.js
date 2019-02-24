import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import CourseList from './components/CourseList';
import {Consumer} from './components/Context';


class App extends Component {

  render() {
    return (
      <Consumer>
      {({matches}) => {
        const totMatches = matches.length;
        return (
          <div className="App">
            <h1>Click me to show or hide the search field</h1>
              <SearchForm />
              {totMatches ? <CourseList /> : null}
          </div>
        )
      }}
      </Consumer>
    );
  }
}

export default App;
