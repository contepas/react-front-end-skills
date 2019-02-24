import React, {Component} from 'react';
import {Consumer} from './Context'

class CourseList extends Component {
 
    render() {
        return(
            <Consumer>
                {context => {
                    const courses = context.matches
                    const totalMatches = courses.length;
                    return (
                        <div id="course-list">
                        <p>{`I got ${totalMatches} matches`}</p>                    
                        <ul>
                            <React.Fragment>
                                {courses.map( course =>
                                    <li key={course.id.toString()}>{course.title}</li>
                                )}
                            </React.Fragment>
                        </ul>
                    </div>
                    )
                }    
                }
            </Consumer>
        )
    }
}

export default CourseList