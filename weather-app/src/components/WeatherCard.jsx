function WeatherCard(weather) {
  return (
    <div className='weather__card'>
        <div className='weather__location'>{weather.location}</div>
        <div className='weather__temperature'>{weather.temperature}</div>
        <div className='weather__icon'>{weather.icon}</div>
    </div>
  )
}

export default WeatherCard