import "../styles/home.css"
const HomeWeather = ({weather}) => {
    return (
        <>
            <div className="home">
                {weather&& <h1>Warsav</h1>}
                {weather&& <p>{weather.vt1nowcast.narrative256Char}</p>}
                
            </div>
        </>
    );
}
 
export default HomeWeather;