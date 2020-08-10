import React,{useState} from 'react';
import WeatherContext from './WeatherCityContext'


const WeatherCityProvider = (props) => {

    const [city,setCity] = useState('');

    return (
        <WeatherContext.Provider value={{city, setCity}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherCityProvider;
