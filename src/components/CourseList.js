import React, {Component} from 'react';
import {Consumer} from './Context'

class CourseList extends Component {
 
    render() {
        return(
            <Consumer>
                {({matches}) => {
                    const totalMatches = matches.length;
                    return (
                        <div id="course-list">
                        <p>{`I got ${totalMatches} matches`}</p>                    
                        <ul>
                            <React.Fragment>
                                {matches.map( course =>
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