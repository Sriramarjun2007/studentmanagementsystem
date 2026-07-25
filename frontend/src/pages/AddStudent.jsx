import { useState } from "react";

function AddStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    const saveStudent = async () => {
        try {
            const response = await fetch(
                "https://studentmanagementsystem-backend-2ijo.onrender.com/api/add-student/",
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
        <div style={styles.page}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Add Student</h1>

                <div style={styles.field}>
                    <label style={styles.label}>Name</label>
                    <input
                        type="text"
                        placeholder="Enter student name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={styles.input}
                    />
                </div>

                <div style={styles.field}>
                    <label style={styles.label}>Age</label>
                    <input
                        type="number"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        style={styles.input}
                    />
                </div>

                <div style={styles.field}>
                    <label style={styles.label}>Course</label>
                    <input
                        type="text"
                        placeholder="Enter course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        style={styles.input}
                    />
                </div>

                <button
                    onClick={saveStudent}
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Save Student
                </button>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        padding: "20px",
    },
    card: {
        backgroundColor: "#ffffff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
    },
    heading: {
        textAlign: "center",
        marginBottom: "28px",
        color: "#222",
        fontSize: "26px",
        fontWeight: "700",
    },
    field: {
        marginBottom: "18px",
        display: "flex",
        flexDirection: "column",
    },
    label: {
        fontSize: "13px",
        fontWeight: "600",
        color: "#555",
        marginBottom: "6px",
    },
    input: {
        padding: "10px 12px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        outline: "none",
        transition: "border-color 0.2s ease",
    },
    button: {
        width: "100%",
        padding: "12px",
        marginTop: "10px",
        backgroundColor: "#2563eb",
        color: "#fff",
        fontSize: "15px",
        fontWeight: "600",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
    },
    buttonHover: {
        backgroundColor: "#1d4ed8",
    },
};

export default AddStudent;