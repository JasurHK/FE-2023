import { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';
import './App.css';
import fetchWeather from './api/fetchWeather';
import featchSearchedWeather from './api/fetchSearchedWeather';

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null)

  const getUserLatLon = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  const getUserLocationWeather = async () => {
    getUserLatLon()
    if(latitude !== null && longitude !== null) {
      let data = await fetchWeather(latitude, longitude)
      setWeatherData(data)
    }
  }  

  const searchWeather = async (city) => {
    try {
      let searchedWeather = await featchSearchedWeather(city)
      setWeatherData(searchedWeather)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    getUserLocationWeather()
  })


  return (
    <>
      <SearchInput onSearch={searchWeather}/>
      <WeatherCard weather={weatherData}/>
    </>
  )
}

export default App
