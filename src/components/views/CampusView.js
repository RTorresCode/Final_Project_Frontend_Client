/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
    const { campus } = props;

    // If there are no students, display a message.
    if (!props.campus.students.length) {
        return (
            <div>
                <h1>{campus.name}</h1>
                <p>{campus.address}</p>
                <p>{campus.description}</p>
                <br />
                <h3>There are no students at this campus</h3>
            </div>
        );

    } else {

      // Render a single Campus view with list of its students
      return (
        <div>
          <h1>{campus.name}</h1>
          <p>{campus.address}</p>
          <p>{campus.description}</p>

          {campus.students.map( student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <div key={student.id}>
                <Link to={`/student/${student.id}`}>
                  <h2>{name}</h2>
                </Link>             
              </div>
            );
          })}
        </div>
      );
    }
  
};

export default CampusView;
