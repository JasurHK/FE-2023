import "../styles/home.css"
import daySunny from '../assets/day.svg'
import nigthClear from '../assets/night.svg'
import cloudyDay from '../assets/cloudy-day-1.svg'
import cloudyNight from '../assets/cloudy-night-1.svg'
import rainyDay from '../assets/rainy-1.svg'
import rainyNight from '../assets/rainy-5.svg'
import thunder from '../assets/thunder.svg'
import snowyDay from '../assets/snowy-1.svg'
import snowyNight from '../assets/snowy-6.svg'
import weatherIcon from '../assets/weather.svg'
import sunset from '../assets/weather_sunset.svg'



const HomeWeather = ({weather}) => {
   
    return (
        <div className="container">
            <div className="box">
                <img src={thunder} alt="" />
                {!weather[0] && 
                <div className="loader">
                    <div data-glitch="Loading..." className="glitch">Loading...</div>
                </div>
                }
                {/* {weather[1]&& <h1>{weather[1].searched.city}</h1>}
                {weather[0]&& <p>{weather[0].vt1nowcast.narrative256Char}</p>}              */}
            </div>
        </div>
    );
}
 
export default HomeWeather;