import React from 'react';

const Course = (props) => (
  <li className="course media group">
    <div>
      <h3>{props.course.title}</h3>
      <p>{props.course.keys.join(' ')}</p>
    </div>
  </li>
);

export default Course;