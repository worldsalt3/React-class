import { useState, useEffect, createContext } from 'react'
import WeatherComponent from '../../Component/Weather/weather.component'
import './weather.css'

export const DataContext = createContext()

const Weather = () => {

    const [searchQuery, setSearchQuery] = useState('')
     let APIkey = '3b588a70808f0b4dfad48e1aa66012b3'

    const [data, setData] = useState('')

    const handleSearch = (e) => {
        let userInput = e.target.value
        setSearchQuery(userInput)
    }

    useEffect(() => {
        let fetchWeatherApi = async () => {
            let res = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APIkey}`
            )
            let data = await res.json()
            setData(data) 
        }

        fetchWeatherApi()
    }, [searchQuery])


    console.log(data)
  return (
    <DataContext.Provider value={data}>
      <div className='weather-container'>
        <h1>Weather App</h1>
        <input
          type='search'
          name='search'
          value={searchQuery}
          onChange={handleSearch}
        />
        <WeatherComponent />
      </div>
    </DataContext.Provider>
  )
}

export default Weather