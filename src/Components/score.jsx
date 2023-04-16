import React from 'react'
import { Grid, Typography } from '@mui/material';
import RadialBar from "../Pages/Radial/RadialBar";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
// import { Doughnut } from 'react-chartjs-2';



const styles = {
    features: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #F9A826",
        borderRadius: "10px",
        boxShadow: "0 0 10px #fff",
        padding: "1rem",
    },
  
    text: {
      textAlign: "center",
      color: "rgba(156, 163, 175)",
      width: "80%",
    },
  };



const score = (props) => {
  const email= props.email
  const data= props.data
  const timedata=[data.mintime, data.time, data.avgtime, data.maxtime];
  const attemptdata=[data.minattempt, data.attempt, data.avgattempt, data.maxattempt];
  const label=["Minimum time", "Your Time", "Average Time", "Maximum Time"];
  const label2=["Minimum Attempts", "Your Attempts", "Average Attempts", "Maximum Attempts"];
  // const series=[100, 255, 41, 17, 15];
  let levelstr="You are on Level"+data.level+" Complete Game to see your Rank";
  if(data.level==6){
    levelstr=" Your Rank is #"+data.rank;
  }
  console.log(levelstr);
  console.log(timedata);
  
  return (
   <div>
   <Grid container sx={{
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    minHeight: '100vh',
    backgroundColor: '#0a0908',
   }} >


  {/* -------------------------------------Heading----------------------------------- */}
    <Grid item xs={12} sx={{ textAlign: 'center' }}>
     <Typography sx={{
        color: '#fff',
        fontSize: '2rem',
        fontWeight: 'bold',
        mt: '150px',
     }} >
      {levelstr}
     </Typography>
    </Grid>

    {/* -------------------------------------Score----------------------------------- */}

    <Grid item xs={12} sx={{
        p : '2rem',
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
        >
  {/* 1st item */}
  <Grid item sx={styles.features}>
          <h4>Increase Security</h4>
          <Typography variant="body1" sx={styles.text}>
          Time Taken
          </Typography>
          <RadialBar label={label} timedata={timedata} />


        </Grid>

        <Grid item sx={styles.features}>
          <Typography variant="body1" sx={styles.text}>
          Attempts
          </Typography>
          <RadialBar label={label2} timedata={attemptdata} />

   
        </Grid>
</Grid>

{/* -------------------------------Stats------------------------------------- */}

{/* "allData": {
		"email": "gg@gmail.com",
		"rank": 4,
		"time": 541299,
		"attempt": 0,
		"mintime": 50,
		"minattempt": 0,
		"maxtime": 79080450,
		"maxattempt": 14,
		"avgtime": 13653304,
		"avgattempt": 4,
		"level": 6,
		"game1": [
			1,
			0,
			43715
		],
		"game2": [
			1,
			0,
			15754
		],
		"game3": [
			1,
			0,
			75090
		],
		"game4": [
			1,
			0,
			63459
		],
		"game5": [
			1,
			0,
			343281
		]
	} */}

<Grid item xs={10} sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
        >


<Grid item sx={styles.features}>
          
          <Typography variant="body1" sx={styles.text}>
        Rank
          </Typography>

          </Grid>

          <Grid item sx={styles.features}>
         
          <Typography variant="body1" sx={styles.text}>
          Attempts
          </Typography>

          </Grid>
          <Grid item sx={styles.features}>
         
          <Typography variant="body1" sx={styles.text}>
          Attempts
          </Typography>

          </Grid>
          <Grid item sx={styles.features}>
         
          <Typography variant="body1" sx={styles.text}>
          Attempts
          </Typography>

          </Grid>


          </Grid>


</Grid>

    </div>

  )
}

export default score;