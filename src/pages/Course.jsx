import React from 'react';
import { useParams } from 'react-router-dom';

function H1({ children }) {
  return (
    <React.Fragment>
      <h1 style={{ fontSize: '58px', fontWeight: 400 }}>{children}</h1>
    </React.Fragment>
  );
}

function Course() {
  let { courseId } = useParams();
  // console.log(params);
  if (!['Graphics design', 'Web3', 'Product Design', 'Frontend Engineering'].includes(courseId)) {
    return (<div> No Course</div>)
  }

  return (
    <div>
      <h3>Course</h3>

      <p>I am on a route of {courseId}</p>
    </div>
  );
}

export default Course;
