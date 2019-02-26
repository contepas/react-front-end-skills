import React, {Component} from 'react';
import {Consumer} from './Context';
import Course from './Course';

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
                                    <Course key={course.id.toString()} course={course}/>
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