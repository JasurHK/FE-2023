import useFetch from "./useFetch";

const Card = () => {
    const key = 'aea35f50e133b4ecc36b1033d7d54938'
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid='+{key})

    return (
        <div className="card">
            <div className="left-card">
                <h3>city</h3>
                <p>Currently in city (data)</p>
                <h1>+25C <span>o</span></h1>
                <p>Feels like +27C</p>
                <h5>Variable cloud, no precipitation</h5>
            </div>
            <div className="right-card">
                <div>
                    <p>Night</p>
                    <i>0</i>
                    <h2>+19</h2>
                </div>
                <div>
                    <p>Morning</p>
                    <i>0</i>
                    <h2>+19</h2>
                </div>
                <div>
                    <p>Day</p>
                    <i>0</i>
                    <h2>+19</h2>
                </div>
                <div>
                    <p>Evening</p>
                    <i>0</i>
                    <h2>+19</h2>
                </div>
            </div>
        </div>
    );
}
 
export default Card;