import React from 'react';

const Course = (props) => (
    <div className="course">
        <h5>{props.course.title}</h5>
        <p>{props.course.keys.join(' ')}</p>
    </div>
);

export default Course;