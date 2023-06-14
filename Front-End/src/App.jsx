import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import {About} from "./About";
import {Contact} from "./Contact";
import {Booking} from "./Booking"

import { Home } from "./Home";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user.role);
      console.log(user.role);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
    </div>
  );
}

export default App;
