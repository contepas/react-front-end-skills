import React, {Component} from 'react';
import {Consumer} from '../Context';
import Course from './Course';

class CourseList extends Component {
 
    render() {
        return(
            <Consumer>
                {({matches}) => {
                    const totalMatches = matches.length;
                    return (
                        <div id="course-list">
                            <div className="course-list-head">
                                <p>{`I got ${totalMatches} matches`}</p>  
                            </div>
                                              
                            <div className="courses">
                                <React.Fragment> 
                                    {matches.map( course => 
                                        <Course key={course.id.toString()} course={course}/>
                                    )}
                                </React.Fragment>
                            </div>
                        </div>
                    )
                }    
                }
            </Consumer>
        )
    }
}

export default CourseList