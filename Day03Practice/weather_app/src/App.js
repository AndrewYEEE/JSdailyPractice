import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './FunctionComponent/Title';
import Form from './FunctionComponent/Form';
import Weather from './FunctionComponent/Weather';

function App() {
  const [temperature, setTemperature] = useState(undefined);
  const [country,setCountry] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [humidity, setHumidity] = useState(undefined);
  const [decription, setDescription] = useState(undefined);

  const getWeather = async (event)=>{
    event.preventDefault();
    const Api_Key = '3ec954d675c95c9e42cca6a391fcd1dd';

    //get Form data
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    //fetch會return 一個promise 
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);
    // parses JSON response into native JavaScript objects
    const response = await api_call.json(); 
    console.log(response);

    // APIDOC: https://openweathermap.org/current#geocoding
    setTemperature(response.main.temp?.toString());
    setCountry(response.sys.country?.toString());
    setHumidity(response.main.humidity?.toString());
    setDescription(response.weather[0].description?.toString());
    setCity(response.name?.toString());
  };

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
    </div>
  );
}

export default App;
