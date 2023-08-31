import "../styles/home.css"

const HomeWeather = ({weather}) => {
    // const [isPending , setPending] = useState(false);
    // if (!weather[0]){
    //     setPending(true);
    // }
    // else if(!weather[1]){
    //     setPending(true);
    // }
    // else {
    //     setPending(false);
    // }
   
    return (
        <div className="container">
            <div className="box">
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