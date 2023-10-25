import { BASE_URL, options } from ".";

// const url = 'https://weather338.p.rapidapi.com/weather/forecast?date=20200622&latitude=37.765&longitude=-122.463&language=en-US&units=m';


export default async function fetchWeather(lat, lon) {
    try {
        console.log(`${BASE_URL}weather/forecast?date=20200622&${lat}&${lon}&language=en-US&units=m`)
        const response = await fetch(`${BASE_URL}weather/forecast?date=20200622&${lat}&${lon}&language=en-US&units=m`, options);
        if(response.ok) {
            let data = await response.json()
            console.log(data)
            return data
        }
    } catch (error) {
        console.log(error)
        throw new Error(error.massage)
    }
}