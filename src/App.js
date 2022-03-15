import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import LoginCode from "./views/LoginCode";

function App() {
  return (
    <div className="App h-screen">
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-code" element={<LoginCode />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
