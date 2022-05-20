/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link, Redirect } from "react-router-dom";

const StudentView = (props) => {const { student, editing, toggleEdit, deleteStudent} = props;
    //if (student.gpa !== null) {
    //    let gpa = student.gpa.toFixed(1);
    //    if (gpa % 1 === 0) { 
    //      gpa = gpa.toFixed(1); 
    //    }
    //}
      return (
          <div>
              <h1>{student.firstname + " " + student.lastname}</h1>
              <h2>{student.email}</h2>
              <h6>ID: {student.id}</h6>
      <img src={student.imageUrl} alt="Student Profile"/>
      {student.campus === null ? (
        <div>
          <h3>{student.firstname + " " + student.lastname} is not enrolled.</h3>
          <h4>GPA: N/A (Not enrolled!)</h4>
        </div>
      ) : (
        <div>
          <Link to={`/campus/${student.campus.id}`}>
            <h3>{student.campus.name}</h3>
          </Link>
          {student.gpa !== null ? (
            <h4>GPA: {student.gpa}</h4>
          ) : (
            <h4>No GPA is given.</h4>
          )}
        </div>
      )}
      {}
      <button onClick={async () => {
        await deleteStudent(student.id);
        window.location.assign(window.location.href)}}>Delete Student</button>
      <br />
      <br />
      {editing ? (
        <button onClick={toggleEdit}>Quit Edit</button>
      ) : (
        <button onClick={toggleEdit}>Edit Student</button>
      )}
      <br />
    </div>
  );

};

              
export default StudentView;