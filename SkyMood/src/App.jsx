import { useState } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { WiDaySunny } from 'weather-icons-react';
import { useEffect } from 'react';

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

    const [forecast , setForecast] = useState('')

    useEffect(()=>{
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=aea35f50e133b4ecc36b1033d7d54938',{
      method: 'get'
    })
    .then(res =>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      setForecast(data)
    })
    }, [])


  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <div className="weather">
        <div className="weather-details">
          <div>
            <p></p>
          </div>
          <h1>K</h1>
        </div>
        <div className="weather-icon">
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default App
