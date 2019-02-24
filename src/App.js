import React, { Component } from 'react';
import {Provider} from './components/Context';
import server_response from './fakeData'
import SearchForm from './components/SearchForm';
import CourseList from './components/CourseList';


class App extends Component {
  state = {
    matches: []
  }

  filterCourses = (subject) => {
    const newMatches = [];

    for (let course of server_response.COURSES) {
      if (course.keys.includes(subject)) {
        newMatches.push(course);
      }
    }

    this.setState(prevState => {
      console.log(prevState)
      return {
        matches: [...newMatches, ...prevState.matches]
      }
    })
  }

  renderCourseList = () => {
    if (this.state.matches.length){
      return <CourseList />
    }
  }

  render() {
    return (
      <Provider value = {{
                          matches: this.state.matches,
                          actions: {
                            filterCourses: this.filterCourses
                          }
                          }}>
        <div className="App">
          <h1>Click me to show or hide the search field</h1>
            <SearchForm />
            {this.renderCourseList()}
        </div>
      </Provider>
    );
  }
}

export default App;
