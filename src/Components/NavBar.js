import React,{useState,useContext, useEffect} from 'react';
import logoWeatherIcon from '../assets/logoWeather.png'
import searchIcon from '../assets/searchIcon.png'



//context 
import WeatherCityContext from '../Context/WeatherCityContext'
import Context from '../Context/WeatherContext'

const Navbar = () => {

    const[isShow , setIsShow] = useState(false)

    const[searchText , setSearchText] = useState('')
    const {setCity} = useContext(WeatherCityContext);
    const {weather,setWeather} = useContext(Context);


    const handleClick = () => {
        
        if(weather){
           setWeather(null);
           setCity(searchText)
        }
        else{
            setCity(searchText)
        }

        setSearchText('')

    }

    const handleChange = (e)=> {
        setSearchText(e.target.value)
      
        if(weather){
            setWeather(null);
            setCity(e.target.value)
         }
         else{
             setCity(e.target.value)
         }
       
       
    } 

    return (
        <nav className="navbar navbar-expand-lg  navbar-light fixed-top">

            <div className="navbar-brand">
                <img width = '50rem' src={logoWeatherIcon} alt="logo"/>
            </div>

            <ul className="navbar-nav">
                <li className="nav-item active">

                    <button className="navbar-toggler" data-toggle="collapse"  onClick={() => setIsShow(!isShow)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                       {isShow ? (
                            <div>
                            
                            <ul className='input-group btnInputgroup '>
                                <input type="text" placeholder="Search" className="form-control" value={searchText} onChange={handleChange} />
                                <li className="input-group-item-append">
                                    <button className="btn btn-secondary " onClick={ handleClick}>
                                        <img width="12rem" src={searchIcon} alt="searchBox"/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                       ) : null}

                            <div className="collapse navbar-collapse serchBox">
                                <ul className='input-group  '>
                                    <input type="text" placeholder="Search" className="form-control rt" value={searchText} onChange={handleChange}/>
                                    <li className="input-group-item-append">
                                        <button className="btn btn-secondary "  onClick={ handleClick}>
                                            <img width="12rem" src={searchIcon} alt="searchBox"/>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;