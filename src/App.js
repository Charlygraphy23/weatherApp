import React from 'react';
import './App.css';
import WeatherApp from './Components/WeatherApp'


//Provider
import WeatherCityProvider from './Context/WeatherCityProvider'
import WeatherProvider from './Context/WeatherProvider'


const App=()=> {
  return (
    <WeatherCityProvider>
      <WeatherProvider>
            <WeatherApp/>
      </WeatherProvider>
          
    </WeatherCityProvider>
  );
}

export default App;
