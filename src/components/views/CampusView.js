/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, editing, toggleEdit, deleteCampus, enrollStudent, dropStudent} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <h6>ID: {campus.id}</h6>
      <p>{campus.description}</p>
      <img src={campus.imageUrl} alt="Campus Profile"/>
      {campus.students.length === 0 ? (
        <h2>There are no students enrolled at {campus.name}.</h2>
      ) : (
        campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>             
            </div>
          );
        })
      )}
      {/* Was completely breaking the page, as the student/campus gets instant deleted, changed how onClick written */}
      <button onClick={async () => {
        let id = campus.id;
        await deleteCampus(campus.id);
        if(id > 9){
            window.location.assign(window.location.href.slice(0, -3) + 'es')
        } else {
            window.location.assign(window.location.href.slice(0, -2) + 'es')
        }
        }}>Delete Campus</button>
      <br />
      <br />
      {/*<input */}
      {/*type="text" */}
      {/*id="studentId"*/}
      {/*placeholder="Enter Student ID to add / remove"*/}
      {/*/>*/}
      {/*<br />*/}
      {/*<button onClick={() => {enrollStudent(campus.id, document.getElementById("studentId").value); console.log(document.getElementById("studentId").value); alert("Add attempted")}}>Add This Student ID to Campus</button> */}
      {/*<br />*/}
      {/*<button onClick={() => {dropStudent(campus.id, document.getElementById("studentId").value); console.log(document.getElementById("studentId").value); alert("Remove attempted")}}>Remove This Student ID from Campus</button>*/}
      {/*<br />*/}
      {/*<br />*/}
      {editing ? (
        <button onClick={toggleEdit}>Quit Edit</button>
      ) : (
        <button onClick={toggleEdit}>Edit Campus</button>
      )}
      <br />
    </div>
  );
};

export default CampusView;