import { Button, Grid , Typography, Modal, Box, TextField} from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import getCookie from "../hooks/getCookie";
import setCookie from "../hooks/setCookie";
import removeCookie from "../hooks/removeCookie";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../Components/Assets/level1.json";
import { useState, useEffect, useRef } from "react";

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

const textfield = {
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  m: 1,
};


const buttons = { margin: "8px", backgroundColor: "#1D3557" };
const text = { padding: 2, margin: "3px 0" };

var modalText = "Try harder";

const Homepage = () => {

  const navigate = useNavigate();
  const form = useRef();

  ////////////// Time Function
  const d = new Date();
  let time = d.getTime();
  let level2time= getCookie("level5");
  if(!level2time){
    let cookieState={
      startTime: time,
      endTime: 0
    }
    setCookie("level5", JSON.stringify(cookieState));
  }

  const [open, setOpen] = useState(false);
const [lastpage, setLastpage] = useState("/level5");
const [message, setMessage] = useState("Retry");
const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
const navigation = () => {
  if (lastpage === "/level5") {
    window.location.reload();
  } else {
    navigate(lastpage);
  }
};


  const checkComplete = (e)=>{
      e.preventDefault();
      let login = getCookie("login");
      let answer=form.current.answer.value
      answer=answer.toLowerCase();
      
      if (login) {  
        let loginp= JSON.parse(login);
        /// calculate time
        const d = new Date();
        let time = d.getTime();
        let getstarttime=getCookie("level5");
        let getstarttimep=JSON.parse(getstarttime);
        let totalTime= time-getstarttimep.startTime;
        if(answer=="thank you skill sensei"){
          removeCookie("level5");
        let cookieStatetime={
          startTime: getstarttimep.startTime,
          endTime: time
        }
        setCookie("level5", JSON.stringify(cookieStatetime));
        console.log(totalTime);
        ///////
          const cookieState = {
              email: loginp.email,
              password: loginp.password,
              username: loginp.username,
              level: 6
            };
            removeCookie("login");
            setCookie("login", JSON.stringify(cookieState));
            axios.post("http://localhost:8000/api/game/level5", {email:loginp.email, complete: true, endtime:totalTime})
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log("Error");
            });
        console.log("Success");
        modalText="Congratulations";
        setMessage("Proceed");
        setLastpage("/scoreboard");
        }
        else{
          axios.post("http://localhost:8000/api/game/level5", {email:loginp.email, complete: false, endtime:0})
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log("Error");
            });
        console.log("Try Again");
        modalText="Wrong Answer";
        setMessage("Try Again");
        }
        handleOpen();
      } 
      else {
          modalText="Login to Play";
          setMessage("Retry");
        console.log("Retry");
        window.location.reload();
        handleOpen();
      }
  }

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
       {/* <Lottie options={defaultOptions} height={350} width={800} /> */}
       <Typography sx={{
          fontSize: "2rem",
          color:"#F9A826"
       }} > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </Typography>
       <Typography sx={{
          fontSize: "2rem",
          color:"#F9A826"
       }} > Write Answer to Proceed !!!
       </Typography>
       <form ref={form} onSubmit={checkComplete}>
       <TextField
              style={text}
              required
              name="answer"
              label={
                <Typography style={{ color: "white" }}>Answer</Typography>
              }
              sx={textfield}
        />
        <Button variant="contained" sx={{ marginTop: "2rem" }} type="submit">
        Next Level
      </Button>
       </form>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalText}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <Link
                style={{ textDecoration: "None", color: "black" }}
                to={lastpage}
              > */}
            <Button
              onClick={navigation}
              style={buttons}
              variant="contained"
              color="primary"
            >
              {message}
            </Button>
            {/* </Link> */}
          </Typography>
        </Box>
      </Modal>
      </Grid>
   
    </div>
  );
};

export default Homepage;
