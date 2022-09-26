import { useContext, useState, useEffect } from "react"
import { DataContext } from "../Pages/Weather/Weather"

const ContentComponent = () => {

    const data = useContext(DataContext)

    const [weather, setWeather] = useState(data)


    console.log(data, weather)

    // Our normal use state but modified
    
    useEffect(() => { 
        let changeData = async () => {
            if(data && data.cod === 200) {
                setWeather(data)
            }
        }

        changeData()
    })

  return (
    <div>
        {/* Rendering the out put conditionally */}
        {data && data.cod === 200 ? (
          <div>
            <h1>{weather.weather[0].main}</h1>
            <p>{weather.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt=''
            />
          </div>
        ) : (
          <p>{data.message}</p>
        )}
      {/* {data && <p>{data.message}</p>}
      {weather && (
        <div>
          <h1>{weather.weather[0].main}</h1>
          <p>{weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt=''
          />
        </div>
      )} */}
    </div>
  )
}   

export default ContentComponent