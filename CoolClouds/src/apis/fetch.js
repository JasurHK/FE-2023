
export default async function  fetchLatLon (lat , lon ){
    const url = `https://weather338.p.rapidapi.com/weather/forecast?date=20230828&latitude=${lat}&longitude=${lon}&language=en-US&units=m`;
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '108ca2b751msh7f19e3af9a90362p1dc16ajsn45a05f48bfe2',
    		'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
    	}
    };
    
    try {
    	const response = await fetch(url, options);
		if(!response.ok){
			return response.message;
		}
    	const result = await response.json();
		return result;
    } catch (error) {
    	console.error(error);
    }   
}