import { Routes, Route } from "react-router-dom";
import AddStudent from "./pages/AddStudent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddStudent />} />
    </Routes>
  );
}

export default App;