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
import AvailableFlights from "./AvailableFlights";  //Add by Hiru
import {Flight} from "./Flight";
import { Home } from "./Home";
import { AdminHome } from "./AdminHome";
import { AddAirPort } from "./AddAirport";
import { Display } from "./Display";
import { AdminLogin } from "./AdminLogin";





function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentForm, setCurrentForm] = useState("login");
  const [country, setCountry] = useState("");

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
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Booking" element={<Booking />} />
          
          <Route path="/available-flights" element={<AvailableFlights country={country} />} />  // Pass the country as a prop

          <Route path="/admin" element={<AdminHome />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/airport" element={<AddAirPort />} />
          <Route path="/display" element={<Display />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
        </Routes>
    </div>
  );
}

export default App;
