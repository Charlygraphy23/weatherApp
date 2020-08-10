import React,{useState} from 'react';
import WeatherContext from './WeatherContext'


const WeatherProvider = (props) => {

    const [weather,setWeather] = useState(null);

    return (
        <WeatherContext.Provider value={{weather, setWeather}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;
