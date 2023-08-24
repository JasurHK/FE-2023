import { useState } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { useEffect } from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake } from 'react-icons/fa'; // Import icons from react-icons
import { WiDaySunny, WiCloud, WiRain, WiSnow } from 'react-icons/wi'; // Import icons from react-icons
import useFetch from './useFetch';

const WeatherIcon = ({ code }) => {
  const iconMappings = {
    '01d': <FaSun />,
    '01n': <WiDaySunny />,
    '02d': <WiCloud />,
    '02n': <WiCloud />,
    '03d': <WiCloud />,
    '03n': <WiCloud />,
    '04d': <WiCloud />,
    '04n': <WiCloud />,
    '09d': <WiRain />,
    '09n': <WiRain />,
    '10d': <FaCloudRain />,
    '10n': <WiRain />,
    '13d': <FaSnowflake />,
    '13n': <WiSnow />,
  };
  const icon = iconMappings[code] || null;

  return <div className="weather-icon">{icon}</div>;
};
function App() {

  
    // const url = 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '902d90da72mshfad27c9b108d434p191acejsn81db4bf0c071',
    //         'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
    //     }
    // };
    // const [forecast, setForecast] = useState([])
    // useEffect(()=>{
    //   fetch(url , options)
    // .then(res=>{
    //   return res.json()
    // })
    // .then((data)=> {
    //   console.log(data.location.name);
    //   setForecast(data)
    // })
    // },[])

    

    
  

  const { data, isPanding, error} = useFetch()

  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <div className="weather">
        <div className="weather-details">
          <div>
            <h1>{data&& data.name}</h1>
            <p>{data && data.weather[0].description}</p>
            <p>chans of rain: {data && data.main.humidity}%</p>
          </div>
          <h1>{data &&data.main.temp}K</h1>
        </div>
        <div className="weather-icon">
          
        </div>
      </div>
    </div>
  )
}

export default App
