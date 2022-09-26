import { useEffect, useState, createContext} from 'react'

export const WeatherContext = createContext(null)


const Component3 = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [data, setData] = useState('')


   

  

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    
    useEffect(() => {
        const fetchWeather = async () => {
           let response = await fetch()
           let data = await response.json()
           setData(JSON.stringify(data))
        }

        fetchWeather()
    }, [searchQuery])


  console.log('component 3 render')
  return (
    <WeatherContext.Provider value={data}>
      <input
        type='search'
        name='search'
        value={searchQuery}
        onChange={handleChange}
      />
      <pre>{data}</pre>

      {/* <h3>{num}</h3>
      <p>{color}</p>
      <button onClick={() => setNum((prevNum) => prevNum + color)}>increment H3 by color</button> */}
    </WeatherContext.Provider>
  )
}


export default Component3