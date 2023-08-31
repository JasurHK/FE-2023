export default async function fetchSearched (city){
    const url = `https://weather338.p.rapidapi.com/locations/search?query=${city}&language=en-US`;
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '902d90da72mshfad27c9b108d434p191acejsn81db4bf0c071',
    		'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
    	}
    };
    try {
    	const response = await fetch(url, options);
    	const result = await response.json();
		const data ={
			city : result.location.city[0],
			country : result.location.countryCode[0], 
			latitude : result.location.latitude[0],
			longitude : result.location.longitude[0],
		};
		return data ;
    } catch (error) {
    	console.error(error);
    }
}