import React, {Component} from 'react';
import {Consumer} from './Context';
import SearchForm from './SearchForm';
import CourseList from './CourseList';

class CourseFinder extends Component {
 
    render() {
        return (
          <Consumer>
          {({matches}) => {
            const totMatches = matches.length;
            return (
              <div className="course-finder">
                <h3>Type the name of the subject, to look my courses relative to it!</h3> 
                <SearchForm />
                {totMatches ? <CourseList /> : null}
              </div>
            )
          }}
          </Consumer>
        );
      }
}

export default CourseFinder