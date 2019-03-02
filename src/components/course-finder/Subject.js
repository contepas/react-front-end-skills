import React from 'react';

const Subject = (props) => (
  <button className="subject" type="button" onClick={() => props.deleteCourses(props.subject)}>
    {props.subject}
  </button>
);

export default Subject;