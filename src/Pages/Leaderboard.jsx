import { Button, Grid , Typography, Modal, Box} from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import getCookie from "../hooks/getCookie";
import setCookie from "../hooks/setCookie";
import removeCookie from "../hooks/removeCookie";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../Components/Assets/level1.json";
import { useState, useEffect } from "react";
import NoticeFeed from "../Components/NoticeFeed";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttons = { margin: "8px", backgroundColor: "#1D3557" };
const text = { padding: 2, margin: "3px 0" };

var modalText = "Try harder";

const LeaderBoard = () => {
    const navigate = useNavigate();

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    
  return (
    <div>
      <Navbar />
      <Grid container xs={12} sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor:"#000",
        
      }} >
       
       <Grid item sx={{

        p:5,
        borderRadius:"20px",
        border:"2px solid #F9A826",
        marginTop:"50px"
       }} >
       <NoticeFeed />
       
      </Grid>
      </Grid>
   
    </div>
  );
};

export default LeaderBoard;