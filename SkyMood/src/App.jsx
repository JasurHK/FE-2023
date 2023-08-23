import { useState } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { WiDaySunny } from 'weather-icons-react';
import { useEffect } from 'react';

function App() {
  const [forecast, setForecast] = useState('')
  const url = 'https://forecast9.p.rapidapi.com/rapidapi/forecast/Berlin/hourly/';
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': '902d90da72mshfad27c9b108d434p191acejsn81db4bf0c071',
  		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
  	}
  };
  useEffect(()=>{
    fetch(url , options)
  .then(res=>{
    return res.json()
  })
  .then((data)=> {
    console.log(data.stringify());
    setForecast(data);
  })
  },[])

  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <div className="weather">
        <div className="weather-details">
          <div>
            <h1>CityName</h1>
            <p>chance of rain</p>
          </div>
          <h1>31 C</h1>
        </div>
        <div className="weather-icon">
          <WiDaySunny size={100}/>
          <div>
            {forecast && <p>{forecast[2]}hello</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
