import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/AddStudent";
import AddStudent from "./pages/AddStudent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Addstudent" element={<AddStudent/>} />
    </Routes>
  );
}

export default App;