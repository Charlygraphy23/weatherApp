import React,{useContext,useEffect,useState} from 'react';
import axios from 'axios'

// Icons
import Sunny from '../assets/weatherLogo/sunny.svg'
import cloud from '../assets/weatherLogo/cloud.svg'
import hazy from '../assets/weatherLogo/hazy.svg'
import dreary from '../assets/weatherLogo/dreary.svg'
import fog from '../assets/weatherLogo/foggy.svg'
import rain from '../assets/weatherLogo/rain.svg'
import thunderstorm from '../assets/weatherLogo/thunderstorm.svg'
import snow from '../assets/weatherLogo/snow.svg'
import clearmoon from '../assets/weatherLogo/clearmoon.svg'
import hazyMoon from '../assets/weatherLogo/hazyMoon.svg'
import moonthunderstorm from '../assets/weatherLogo/moonthunderstorm.svg'

//context 
import WeatherContext from '../Context/WeatherContext'

const WeatherReport = () =>{   

    const {weather} = useContext(WeatherContext);
    const [image , setBackgroundImage] = useState('');
    const [icon , setIcon] = useState('');

    useEffect( () => {

        // Images
        if( weather.file?.WeatherIcon === 7 || weather.file?.WeatherIcon === 6 || weather.file?.WeatherIcon === 8 || weather.file?.WeatherIcon  === 4 || weather.file?.WeatherIcon  === 19 || weather.file?.WeatherIcon  === 20 || weather.file?.WeatherIcon  === 21 
            ||  weather.file?.WeatherIcon === 35 ||  weather.file?.WeatherIcon === 36 ||  weather.file?.WeatherIcon === 38 ||  weather.file?.WeatherIcon === 43  ){
            setBackgroundImage('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg')
        }
        else if(  weather.file?.WeatherIcon  === 1 || weather.file?.WeatherIcon  === 2 || weather.file?.WeatherIcon  === 3 || weather.file?.WeatherIcon  === 30){
            setBackgroundImage('https://images.pexels.com/photos/125457/pexels-photo-125457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
        }
        else if( weather.file?.WeatherIcon  === 11 || weather.file?.WeatherIcon  === 5 ||  weather.file?.WeatherIcon === 37 ){
            setBackgroundImage('https://wallpapermemory.com/uploads/369/fog-background-full-hd-1920x1080-400476.jpg')
        }
        else if( weather.file?.WeatherIcon  === 12 || weather.file?.WeatherIcon  === 13 || weather.file?.WeatherIcon  === 14 || weather.file?.WeatherIcon  === 18 ||   weather.file?.WeatherIcon === 39 ||  weather.file?.WeatherIcon === 40 ){
            setBackgroundImage('https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
        }
        else if(weather.file?.WeatherIcon  === 15 || weather.file?.WeatherIcon  === 16 || weather.file?.WeatherIcon  === 17 ||  weather.file?.WeatherIcon === 41 ||  weather.file?.WeatherIcon === 42){
            setBackgroundImage('https://wallpapercave.com/wp/wp6866140.jpg')
        }
        else if(weather.file?.WeatherIcon  === 22 || weather.file?.WeatherIcon  === 23 || weather.file?.WeatherIcon  === 24 || weather.file?.WeatherIcon  === 25 || weather.file?.WeatherIcon  === 31 ||  weather.file?.WeatherIcon === 34 ) {
            setBackgroundImage('https://www.thenews.co.nz/wp-content/uploads/2020/06/a-omakausnow5.jpg')
        }
        else if(weather.file?.WeatherIcon  === 26 || weather.file?.WeatherIcon  === 29){
            setBackgroundImage('https://d.newsweek.com/en/full/1275516/gettyimages-901213212.jpg')
        }
        else if(weather.file?.WeatherIcon  === 32){
            setBackgroundImage('https://www.schaeffler.co.in/remotemedien/media/_shared_media_rwd/04_sectors_1/industry_1/windpower_1/47120_header-schaeffler-industry-solutions-wind-wind.jpg')
        }
        else if( weather.file?.WeatherIcon  === 33 || weather.file?.WeatherIcon  === 34 ){
            setBackgroundImage('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
        }     
          
        // Else
        else{
            setBackgroundImage('https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
        }



    },[weather]);

    useEffect( () => {
        if( weather.file?.WeatherIcon === 1 || weather.file?.WeatherIcon === 2 || weather.file?.WeatherIcon === 3 || weather.file?.WeatherIcon === 21 || weather.file?.WeatherIcon === 30){
           setIcon(Sunny);
        }
        else if( weather.file?.WeatherIcon === 4 || weather.file?.WeatherIcon === 6 || weather.file?.WeatherIcon === 7 || weather.file?.WeatherIcon === 19
           || weather.file?.WeatherIcon === 35 || weather.file?.WeatherIcon === 38 || weather.file?.WeatherIcon === 43 ){
            setIcon(cloud);
         }
         else if( weather.file?.WeatherIcon === 5 ){
            setIcon(hazy);
         }
         else if(weather.file?.WeatherIcon === 8){
             setIcon(dreary)
         }
         else if(weather.file?.WeatherIcon === 11 || weather.file?.WeatherIcon === 31){
            setIcon(fog)
        }
        else if(weather.file?.WeatherIcon === 12 || weather.file?.WeatherIcon === 13 || weather.file?.WeatherIcon === 14 || weather.file?.WeatherIcon === 18  || weather.file?.WeatherIcon === 29){
            setIcon(rain)
        }
        else if(weather.file?.WeatherIcon === 15 || weather.file?.WeatherIcon === 16 || weather.file?.WeatherIcon === 17){
            setIcon(thunderstorm)
        }
        else if(weather.file?.WeatherIcon === 22 || weather.file?.WeatherIcon === 23 || weather.file?.WeatherIcon === 25 || weather.file?.WeatherIcon === 44){
            setIcon(snow)
        }

        else if(weather.file?.WeatherIcon === 33|| weather.file?.WeatherIcon === 34){
            setIcon(clearmoon)
        }
        else if(weather.file?.WeatherIcon === 36 || weather.file?.WeatherIcon === 37 || weather.file?.WeatherIcon === 39 || weather.file?.WeatherIcon === 40 ){
            setIcon(hazyMoon)
        }
        else if(weather.file?.WeatherIcon === 41|| weather.file?.WeatherIcon === 42 ){
            setIcon(moonthunderstorm)
        }

    },[])


    return(
        <div className="wr"  style={{backgroundImage : `url(${image})` ,
                        backgroundPosition : 'center' ,
                        backgroundSize : 'cover',
                        backgroundRepeat : 'no-repeat'}}>

                <div className="jumbotron">
                    <h1 className="display-1 text-white text" style={{marginTop: '10%'}}>Weather App</h1>
                    
                </div>

                <div className="d-flex justify-content-between " style={{marginTop: '10%',marginBottom: '30px'}}>
                
                     <img width='30%' src={icon} alt="img" className="ml-4 "/>
                    <div className="mr-2 text-right info">
                        <h4 className="text-white display-3 mt-3 mr-2"><strong>{weather.file?.Temperature.Metric?.Value}°C</strong></h4>
                        <h1 className="text-white display-4 weatherText">{weather.file?.WeatherText}</h1>
                        <h1 className="text-white display-4  ">{weather.place},<br/>{weather.dist}</h1>
                    </div>
                </div>

                <div className="mt-4 p-4">
                        <h1><a href={weather.file?.MobileLink} className="text-white text">Powerd by AccuaWeather</a></h1>
                </div>

        </div>
    )

}
export default WeatherReport;