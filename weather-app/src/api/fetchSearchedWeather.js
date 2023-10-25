import { BASE_URL, options } from ".";

// const url = 'https://weather338.p.rapidapi.com/locations/search?query=san%20fran&language=en-US';

export default async function featchSearchedWeather(searchQuery) {
    try {
        const response = await fetch(`${BASE_URL}locations/search?query=${searchQuery}&language=en-US`, options)
        if (response.ok) {
            let data = response.json()
            return data
        }
    } catch (error) {
        throw new Error(error)
    }
}