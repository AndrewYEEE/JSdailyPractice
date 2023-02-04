import React, { useState ,useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './FunctionComponent/Title';
import Form from './FunctionComponent/Form';
import Weather from './FunctionComponent/Weather';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function App() {
  const [open, setOpen] = useState(false); //MeterialUI開關需要
  const [temperature, setTemperature] = useState(undefined);
  const [country,setCountry] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [humidity, setHumidity] = useState(undefined);
  const [decription, setDescription] = useState(undefined);
  
  const handleClose = useCallback(() => {
    setOpen(false);
  },[]);

  const getWeather =  useCallback(async (event)=>{
    event.preventDefault();
    const Api_Key = 'API_KEY';

    //get Form data
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    //fetch會return 一個promise 
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);
    // parses JSON response into native JavaScript objects
    if (api_call.status == 200){
      const response = await api_call.json(); 
      console.log(response);

      // APIDOC: https://openweathermap.org/current#geocoding
      setTemperature(response.main.temp?.toString());
      setCountry(response.sys.country?.toString());
      setHumidity(response.main.humidity?.toString());
      setDescription(response.weather[0].description?.toString());
      setCity(response.name?.toString());
    }else{
      setOpen(true); //Open AlertUI
    }
  },[]); //第一次建立此function就不回再改變內容，可以避免因為Component重新render導致又重新建立一次此函式 
 
  let layout;
  if (temperature!==undefined){
    layout= (
      <div>
        <Weather result={{
          country: country,
          city: city,
          temperature: temperature,
          humidity: humidity,
          decription: decription,
        }}/>
      </div>
    )
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo"></img>
        <h2>Simple Project: Weather App</h2>
      </header>
      <div>
        <Titles></Titles>
        <Form loadWeather={getWeather}></Form>
        {layout}
      </div>
      {/* {Alert UI} */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{color: 'black'}}>
          {"Oops!! Something Wrong Happen!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Can not get response of OpenWeatherMap!
            Please try again!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
