import { useState } from "react";

function AddStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    const saveStudent = async () => {

        const response = await fetch(
            "http://127.0.0.1:8000/api/add-student/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    age,
                    course,
                }),
            }
        );

        const data = await response.json();

        alert(data.message);
    };

    return (
        <div>

            <h1>Add Student</h1>

            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Course"
                onChange={(e) => setCourse(e.target.value)}
            />

            <br /><br />

            <button onClick={saveStudent}>
                Save Student
            </button>

        </div>
    );
}

export default AddStudent;