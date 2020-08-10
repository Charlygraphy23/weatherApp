import React from 'react';
import WeatherTypesContext from './WeatherTypesContext';


const WeatherTypesProvider = (props) => {

    const weatherImage = ['https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg',
                    'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                         'https://images.pexels.com/photos/125457/pexels-photo-125457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'                               
]

    return (
        <WeatherTypesContext.Provider value={{weatherImage}}>
            {props.children}
        </WeatherTypesContext.Provider>
    )
    
}
export default WeatherTypesProvider;