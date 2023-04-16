import React from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from 'react-router-dom'
import Score from "../Components/score";


const ScoreBoard = () => {
  const location = useLocation();
  console.log('Email', location.state.email)
  return (
    <div>
      <Navbar />
     <Score  />

    </div>
  );
};

export default ScoreBoard;
