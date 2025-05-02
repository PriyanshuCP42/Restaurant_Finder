// src/pages/Home.jsx
import React from "react";
import { auth } from "../firebase/firebase.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome to the Home Page 🎉</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
