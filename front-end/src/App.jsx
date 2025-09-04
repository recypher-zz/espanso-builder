import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import './App.css';
import ApprovalPage from "./pages/ApporvalPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/triggers/approval/:id" element={<ApprovalPage />} />
    </Routes>
  );
}

export default App;
