import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";  
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import AdminDash from "../Dashboard/adminDsh";
import UserDash from "../Dashboard/useDash";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminDash />}/>
        <Route path="/user" element={< UserDash/>}/>
      </Routes>
    </Router>
  );
}; 

export default App;
