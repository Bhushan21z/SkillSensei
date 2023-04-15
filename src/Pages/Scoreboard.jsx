import React from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from 'react-router-dom'


const ScoreBoard = () => {
  const location = useLocation();
  console.log('Email', location.state.email)
  return (
    <div>
      <Navbar />

    </div>
  );
};

export default ScoreBoard;
