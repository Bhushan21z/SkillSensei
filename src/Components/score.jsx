import React from 'react'
import { Grid, Typography } from '@mui/material'



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



const score = () => {
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
     }} >
      ScoreBoard
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
         
          <h4 >Increase Security</h4>
          <Typography variant="body1" sx={styles.text}>
          Score
          </Typography>

          {/* chart */}
            <div> 
            <canvas id="myChart" width="400" height="400">


            </canvas>
            </div>

        </Grid>

        <Grid item sx={styles.features}>
         
          <h4 >Increase Security</h4>
          <Typography variant="body1" sx={styles.text}>
          Attempts
          </Typography>
        </Grid>


</Grid>


</Grid>

    </div>

  )
}

export default score