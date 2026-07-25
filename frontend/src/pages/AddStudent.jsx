import { useState } from "react";

function AddStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    const saveStudent = async () => {
        try {
            const response = await fetch(
                "https://studentmanagementsystem-lfs7.onrender.com/api/add-student/",
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

            // Clear the form after saving
            setName("");
            setAge("");
            setCourse("");

        } catch (error) {
            console.log(error);
            alert("Error while saving student");
        }
    };

    return (
        <div>
            <h1>Add Student</h1>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Course"
                value={course}
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