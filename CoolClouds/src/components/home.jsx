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
import { useState } from "react"
import { useEffect } from "react"

// const HomeWeather = ({weather}) => {
//     // console.log(weather)
//     // const [iconIdToFind , setIconIdToFind] = useState('10');
    

//     // function handleIcons(icons, idToFind) {
//     //     const foundIcon = icons.find(icon => icon.name = idToFind);
//     //     return foundIcon || null; // Return null if no matching icon is found
//     //   }
      
    
//     // const icons = [
//     //     {id:'01' , name :daySunny},
//     //     {id:'02' , name :nigthClear},
//     //     {id:'03' , name :cloudyDay},
//     //     {id:'04' , name :cloudyNight},
//     //     {id:'05' , name :rainyDay},
//     //     {id:'06' , name :rainyNight},
//     //     {id:'07' , name :thunder},
//     //     {id:'08' , name :snowyDay},
//     //     {id:'09' , name :snowyNight},
//     //     {id:'10' , name :weatherIcon},
//     // ]
    
//     useEffect(() => {
//         setIconIdToFind(weather[0].vt1nowcast.narrative32Char )
//         console.log(weather)
//     const [iconIdToFind , setIconIdToFind] = useState('10');
    

//     function handleIcons(icons, idToFind) {
//         const foundIcon = icons.find(icon => icon.name = idToFind);
//         return foundIcon || null; // Return null if no matching icon is found
//       }
      
    
//     const icons = [
//         {id:'01' , name :daySunny},
//         {id:'02' , name :nigthClear},
//         {id:'03' , name :cloudyDay},
//         {id:'04' , name :cloudyNight},
//         {id:'05' , name :rainyDay},
//         {id:'06' , name :rainyNight},
//         {id:'07' , name :thunder},
//         {id:'08' , name :snowyDay},
//         {id:'09' , name :snowyNight},
//         {id:'10' , name :weatherIcon},
//     ]
//     const foundIcon = handleIcons(icons, iconIdToFind);
//       },[weather[1]])
   
//     return (
//         <div className="container">
//             <div className="box">
//                 {!weather[0] && 
//                 <div className="loader">
//                     <img src={foundIcon.name} alt="" />
//                     <div data-glitch="Loading..." className="glitch">Loading...</div>
//                 </div>
//                 }
//                 {weather[1]&& <img src={foundIcon.name} alt="" />}
//                 {weather[1]&& <h1>{weather[1].searched.city}</h1>}
//                 {weather[0]&& <p>{weather[0].vt1nowcast.narrative256Char}</p>}             
//             </div>
//         </div>
//     );
// }
 
// export default HomeWeather;

const HomeWeather = ({ weather }) => {
  const [foundIcon, setFoundIcon] = useState(null);
  console.log(weather)

  // Define icons and their corresponding weather condition IDs
  const icons = [
    { id: '32', name: daySunny },
    { id: '02', name: nigthClear },
    { id: '03', name: cloudyDay },
    { id: '04', name: cloudyNight },
    { id: '05', name: rainyDay },
    { id: '06', name: rainyNight },
    { id:4, name: thunder },
    { id: '08', name: snowyDay },
    { id: '09', name: snowyNight },
    { id: '10', name: weatherIcon },
  ];

  // Function to find an icon based on the weather condition ID
  const findIconById = (idToFind) => {
    const found = icons.find((icon) => icon.id === idToFind);
    return found ? found.name : null;
  };

  useEffect(() => {
    if (weather && weather[1]) {
      const conditionId = weather[0].vt1nowcast.vt1nowcast;
      const icon = findIconById(conditionId );
      console.log(`${weather[0].vt1nowcast.vt1nowcast}`)
      setFoundIcon(icon);
    }
  }, []);

  return (
    <div className="container">
      <div className="box">
        {!weather[0] && (
          <div className="loader">
            {foundIcon && <img src={foundIcon} alt="icon" />}
            <div data-glitch="Loading..." className="glitch">
              Loading...
            </div>
          </div>
        )}
        {weather[1] && <img src={cloudyDay} alt="" />}
        {weather[1] && <h1>{weather[1].searched.city}</h1>}
        {weather[0] && (
          <p>{weather[0].vt1nowcast.narrative256Char}</p>
        )}
      </div>
    </div>
  );
};

export default HomeWeather;
