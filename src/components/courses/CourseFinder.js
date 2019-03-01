import React, {Component} from 'react';
import {Consumer} from '../Context';
import SearchForm from './SearchForm';
import CourseList from './CourseList';
import Subjects from './Subjects';

class CourseFinder extends Component {
 
    render() {
        return (
          <Consumer>
          {({subjectsFounded, matches}) => {
            const totMatches = matches.length;
            const totSubjectsFounded = subjectsFounded.length;
            return (
              <div className="course-finder">
                <div className="course-finder-head">
                  <h3>Look at my JavaScript related courses!</h3>
                  <p>Or type a skill, to see more</p> 
                  <SearchForm />
                </div>
                {totSubjectsFounded ? <Subjects /> : null}
                {totMatches ? <CourseList /> : null}
              </div>
            )
          }}
          </Consumer>
        );
      }
}

export default CourseFinder