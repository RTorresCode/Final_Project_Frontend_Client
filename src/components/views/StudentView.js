/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;
  
  // If the student is not attending any campus, display a message.
  if (!props.student.campus) {
      return (
          <div>
              <h1>{student.firstname + " " + student.lastname}</h1>
              <p>Email: {student.email}</p>
              <p>GPA: {student.gpa}</p>
              <br />
              <h3>This student is not attending any campus</h3>
          </div>
      );

  } else {

      // Render a single Student view 
      return (
        <div>
          <h1>{student.firstname + " " + student.lastname}</h1>
          <p>Email: {student.email}</p>
          <p>GPA: {student.gpa}</p>
          <Link to={`/campus/${student.campus.id}`}>
            <h3>{student.campus.name}</h3>
          </Link>
        </div>
      );
  }


};

export default StudentView;