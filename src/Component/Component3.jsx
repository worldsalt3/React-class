import {memo, useEffect, useState} from 'react'
const Component3 = ({ color }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [data, setData] = useState('')
    let APIkey = '3b588a70808f0b4dfad48e1aa66012b3'

    useEffect(() => {
        const fetchWeather = async () => {
           let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APIkey}`)
           let data = await response.json()
           setData(JSON.stringify(data))
        }

        fetchWeather()
    }, [searchQuery])

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

  console.log('component 3 render')
  return (
    <>
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
    </>
  )
}


export default memo(Component3)