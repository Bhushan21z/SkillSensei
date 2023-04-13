import { Button, Grid , Typography} from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import getCookie from "../hooks/getCookie";
import setCookie from "../hooks/setCookie";
import removeCookie from "../hooks/removeCookie";
import axios from "axios";


const Homepage = () => {
    const navigate = useNavigate();
    const checkComplete = ()=>{
        let login = getCookie("login");
        if (login) {  
            let loginp= JSON.parse(login);
            const cookieState = {
                email: loginp.email,
                password: loginp.password,
                username: loginp.username,
                level: 2
              };
              removeCookie("login");
              setCookie("login", JSON.stringify(cookieState));
              axios.post("http://localhost:8000/api/game/level1", {email:loginp.email})
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log("Error");
              });
          console.log("Success");
          navigate("/level2");
        } else {
            console.log("Retry");
          //navigate("Retry");
        }
    }
  return (
    <div>
      <Navbar />
      <Grid container xs={12} sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }} >
       
       <Typography sx={{
          fontSize: "2rem",
       }} > You Know What to Do to Proceed</Typography>

        <Button variant="contained" sx={{ marginTop: "2rem" }} onClick={checkComplete}>
        Next Level
      </Button>
      </Grid>
   
    </div>
  );
};

export default Homepage;
