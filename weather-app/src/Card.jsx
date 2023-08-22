import useFetch from "./useFetch";

const Card = () => {
    const url = 'https://forecast9.p.rapidapi.com/rapidapi/forecast/Berlin';
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '902d90da72mshfad27c9b108d434p191acejsn81db4bf0c071',
    		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
    	}
    };
    fetch(url, options)
    .then((res)=>console.log(res))

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