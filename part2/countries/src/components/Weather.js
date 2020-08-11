import React, {useState, useEffect} from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({capital}) => {
    const [weather, setWeather] = useState({})

    const hook = () => {
        let url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
        axios
            .get(url)
            .then(
                response => {
                    setWeather(response.data)
                },
                error => {
                    console.log('Error')
                }
            )
    }

    useEffect(hook, [])

    if (Object.keys(weather).length !== 0) {
        let current = weather.current
        let temperature = current.temperature
        let icon = current.weather_icons
        let windSpeed = current.wind_speed
        let windDir = current.wind_dir

        return (
            <div>
                <h2>Weather in {capital}</h2>
                <div>
                    <b>temperature:</b> {temperature} Celcius <br/>
                    <img src={icon} alt="current_weather" width="60" height="60" /> <br/>
                    <b>wind:</b> {windSpeed} mph direction {windDir}
                </div>
            </div>
        )
    }
    return null
    
} 

export default Weather