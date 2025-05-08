import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Cuisines from "./pages/cuisines";
import About from "./pages/about";
import Restaurants from "./pages/restaurants";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} />
        <Route path="/" element={<Login />} />
        <Route path="/cuisines" element={<Cuisines/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/restaurants" element={<Restaurants/>}/>

      </Routes>
    </Router>
  );
};

export default App;
