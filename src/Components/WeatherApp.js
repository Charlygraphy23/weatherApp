import React from 'react';
import Navbar from './NavBar' 
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom'


//Components

import WeatherReport from './WeatherReport'
import ListOfCitiesComponent from './ListOfCitiesComponent'
import Authorization from './Authorization'

const WeatherApp = () => {

    return (
        <div className="App">

            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={ListOfCitiesComponent}/>
                    <Authorization exact path="/weather" component={WeatherReport}/>
                    {/* <Route  component={WeatherReport}/> */}
                </Switch>                
            </Router>
            
            
        </div>
    )
}
export default WeatherApp;