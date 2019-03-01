import React, {Component} from 'react';
import {Consumer} from '../Context';
import Subject from './Subject';

class CourseList extends Component {
 
    render() {
        return(
            <Consumer>
                {({subjectsFounded, actions}) => {
                    return (
                        <div className="subjects">   
                            <React.Fragment> 
                                {subjectsFounded.length ? subjectsFounded.map( (subject, index) => 
                                    <Subject 
                                        key={index} 
                                        subject={subject[0]}
                                        deleteCourses={actions.deleteCourses}
                                    />
                                ): null} 
                            </React.Fragment>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default CourseList