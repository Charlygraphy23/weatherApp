import React,{useContext} from 'react';
import Context from '../Context/WeatherContext'
import { Redirect , Route } from 'react-router-dom';


 const Authorization = (props) =>{

    const {weather} = useContext(Context);

    if(weather){
        return <Route {...props}/>
    }

    return <Redirect to='/'/>
 }

 export default Authorization;