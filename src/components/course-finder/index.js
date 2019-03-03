import React, {Component} from 'react';
import {Consumer} from '../Context';
import SearchForm from './SearchForm';
import CourseList from './Courses';
import Subjects from './Subjects';

export default class CourseFinder extends Component {
 
    render() {
        return (
            <Consumer>
            {({subjectsFounded, matches}) => {
                const totMatches = matches.length;
                const totSubjectsFounded = subjectsFounded.length;
                return (
                <div className="course-finder">
                    <div className="course-finder-head">
                        <h3>Look trought my Courses!</h3>
                        <p>Type a skill, and press enter to see more</p> 
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