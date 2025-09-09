import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ApprovalPage from "./pages/ApporvalPage";
import AllTriggers from "./pages/AllTriggers";
import { ToastContainer, toast } from 'react-toastify';
import './App.css';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/triggers/approval/:id" element={<ApprovalPage />} />
        <Route path="/triggers/all" element={<AllTriggers />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
