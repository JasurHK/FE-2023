import { useState } from 'react'
import './App.css'
import HomeWeather from './components/home'
import Search from './components/search'
import { useEffect } from 'react'
import fetchLatLon from './apis/fetch'
import fetchSearched from './apis/fetchSearched'


function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null)

  const getUserLatLon = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
        // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  const getUserLocationWeather = async () => {
    getUserLatLon()
    if(latitude !== null && longitude !== null) {
      let data = await fetchLatLon(latitude, longitude)
      setWeatherData(data)
    }
  }  

  const searchWeather = async (city) => {
    try {
      let searched = await fetchSearched(city);
      // console.log(searched);
      let searchedWeatherLatLon = await fetchLatLon(searched.latitude,searched.longitude);

      setWeatherData(searchedWeatherLatLon)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    getUserLocationWeather()
  },[latitude])



  return (
    <div className="app">
      <Search onSearch={searchWeather}/>
      
      <HomeWeather weather={weatherData}/>
    </div>
  )
}

export default App
