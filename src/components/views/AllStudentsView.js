/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    const { students, deleteStudent } = props;
    // If there is no student, display a message
    if (!students.length) {
        return (
            <div>
                <p>There are no students.</p>
                <Link to={`newstudent`}>
                    <button>Add New Student</button>
                </Link>
            </div>
        );
    }

    // If there is at least one student, render All Students view 
    return (
        <div className="allStudents">
            <h1 style={{ color: "#63229A" }} className="pageTitle">All Students
                <span>
                    <br />
                    <Link to={`/newstudent`}>
                        <button className="addButton">Add New Student</button>
                    </Link>
                    <br />
                </span>
            </h1>
            {students.map((student) => {
                let name = student.firstname + " " + student.lastname;
                return (
                    <div key={student.id}>
                        <Link to={`/students/${student.id}`}>
                            <h2>{name}</h2>
                        </Link>
                        <img className="studentImage" style={{ width: '10%', borderRadius: '50%' }} src={student.imageUrl ? student.imageUrl : "https://64.media.tumblr.com/4c62bf7c01d15c7655adeb8a36b9702d/e7531ecdce802bee-c9/s640x960/838eaa8ff68dc51c2b2a38a088767a9704130d58.jpg"} alt="" />
                        <br />
                        <button className="btn" onClick={() => deleteStudent(student.id)}>Delete Student</button>
                        <hr />
                    </div>
                );
            }
            )}
            <br />
            <Link to={`/newstudent`}>
                <button className="btn">Add New Student</button>
            </Link>
            <br /><br />
        </div>
    );
};


export default AllStudentsView;
