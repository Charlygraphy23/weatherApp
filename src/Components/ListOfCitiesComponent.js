import React,{useContext,useEffect,useState} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import search from '../assets/weatherLogo/search.svg'

//context 
import WeatherCityContext from '../Context/WeatherCityContext'
import Context from '../Context/WeatherContext'

const ListOfCitiesComponent = () =>{

    const {city} = useContext(WeatherCityContext);
    const [cityInformation,setCityInformation] = useState([])
    const [isNextIcon,setIsSetIcon] = useState(false)
    const [id,setId] = useState('')
    const {weather,setWeather} = useContext(Context);

    useEffect( ()=> {
        axios.get(`http://dataservice.accuweather.com/locations/v1/search?apikey=39GUHFu7a8RAmgMNP75nFysWxT3GNVu7&q=${city}`).then( ({data}) => {        
            setCityInformation(data);
        }).catch( error => 
            console.log(error))
    },[city])

    const handleClick = (item) => {
        axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${item.Key}?apikey=39GUHFu7a8RAmgMNP75nFysWxT3GNVu7`).then( ({data}) => {
            let dValue =item.SupplementalAdminAreas[0]; 
            const weatherData = {
                file : data[0],
                place : item.EnglishName,
                dist : dValue.EnglishName
            }
            setWeather(weatherData)
        }).catch( error => 
            console.log(error))

    }

    if(weather){
        return <Redirect to='/weather'/>
    }

    return(
        <div className="wr">
                <div className="jumbotron">
                    <h1 className="display-1 text-white text " style={{marginTop: '10%'}}><strong>List Of Cities in India</strong></h1>
                    <p className="text-white text">** All cities under india **</p>
                </div>

                {cityInformation.length !=0 ? (
                    <div className='listCity mt-4 pl-3 pr-3' >
                    <div className='row justify-content-center '>
                         
                         {cityInformation.map( item =>(
                            <div className='col-lg-4 mb-4' key={item.Key}  onMouseOver={() =>setIsSetIcon(true)}    >
                             <div className='card' onClick={() => console.log(item.Key)} onMouseOver={() => setId(item.Key)} onMouseOut={() =>setIsSetIcon(false)} onClick={() =>handleClick(item)} >
                                 <div className="card-body" >
                                     <div className="card-title">
                                         <h5><small>{item.EnglishName}</small>, {item.AdministrativeArea?.EnglishName}</h5>
                                         <h6>{item.Country?.EnglishName}</h6>
                            
                                            {isNextIcon ? (
                                    
                                                <div>
                                                    {item.Key === id ? (
                                                        <div>
                                                           <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                                        </div>
                                                    ) : null }
                                                </div>
                                            ) : null}
                                     </div>
                                 </div>
                             </div>
                            </div>
                         ))}
                         
                    </div>
             </div>
                ) : (
                    <div className="mb-4">
                            <img width="20%" src={search} alt="searchIcon"/>
                    </div>
                )}
               

        </div>
    )

}
export default ListOfCitiesComponent;