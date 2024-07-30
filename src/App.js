
import './App.css';
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';


import { useState, useEffect } from 'react';
function App() {
  let [city, setCity] = useState('');
  let [wdetails, setWdetails] = useState();
  let [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);
  let getData = () => {
    console.log(city);
    setIsloading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fcbd0db56032b6a4d3a3896c85a27d8&units=metric`).
      then((res) => res.json()).
      then((finalRes) => {
        if (finalRes.cod == "404") {
          setWdetails(undefined);
        }
        else {
          console.log(finalRes)
          setWdetails(finalRes)
        }
        setIsloading(false)
      })


    setCity('')
  }
  return (
    <Grid sx={
      {
        backgroundColor: '#4aacb1',
        width: '100%',
        height: '800px',
        display: 'flex',
        flexDirection: 'column',

      }
    }>
      <Grid sx={
        {
          display: 'flex',

          flexDirection: 'column',

          color: 'smokewhite',
          justifyContent: 'center'
        }
      }>
        <Grid sx={
          {
            display: 'flex',
            padding: '50px',
            flexDirection: 'column',
            justifyContent: 'center',
            gap:'12px'

          }
        }>
          <Typography sx={{ fontSize: '32px', alignItems: 'left', fontWeight: 'bold', fontStyle: 'italic' ,color:'white'}}>Know the weather of your city</Typography>
          <Grid sx={
            {
              display: 'flex',
              flexDirection: 'row',
              marginRight: '16px',


              gap: '16px'
            }
          }>
            <FormControl sx={{
              display: 'flex', 
              flexDirection: 'row',
              gap: '16px',
              borderRadius: '10px'
            }}>
              <TextField type='text' label="Enter the city" value={city} onChange={(e) => setCity(e.target.value)} sx={{ backgroundColor: 'white', borderRadius: '10px' }} />
              <Button sx={
                {
                  backgroundColor: 'darkorange',
                  color: 'white',
                  padding:"16px",
                  borderRadius:'10px'
                }
              } onClick={getData}>Submit</Button>
            </FormControl>

          </Grid>

        </Grid>

      </Grid>
      <Grid sx={{
        display: 'flex',

        justifyContent: 'center',

      }}>

        {
          wdetails != undefined
            ?
            <Grid sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '400px',
              height: '320px',
              backgroundColor: 'white',
              color: 'black',
              padding: '24px',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              borderRadius: '10px'



            }}>


              {isLoading ? <img src='https://tse2.mm.bing.net/th?id=OIP.AsvHGFjVFujvuXPOk-3cPgHaHa&pid=Api&P=0&h=180' /> : ""}



              <Typography sx={{
                display: 'flex',
                fontWeight: 'bold',
                fontSize: '24px'
              }}> {wdetails.name},{wdetails.sys.country}</Typography>
              <Typography sx={{
                display: 'flex',
                fontWeight: 'bold',
                fontSize: '32px'
              }}>{wdetails.main.temp} oC</Typography>
              <img className="img" src={`http://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`} />
              <Typography sx={{
                display:'flex',
                fontSize:'20px',
                fontFamily:'sans-serif'
              }}>{wdetails.weather[0].description}</Typography>
            </Grid>
            :
            <Grid sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '400px',
              backgroundColor: "white",
              borderRadius: '12px',
              alignItems: 'center',
              height: '200px'
            }}>
              <Typography>No data found</Typography>
            </Grid>

        }

      </Grid>

    </Grid>

  );
}

export default App;
