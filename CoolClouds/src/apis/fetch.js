
export default async function  fetchLatLon (lat , lon ){
    const url = `https://weather338.p.rapidapi.com/weather/forecast?date=20200622&latitude=${lat}&longitude=${lon}&language=en-US&units=m`;
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
    	console.log(result);
        return result
    } catch (error) {
    	console.error(error);
    }
    
}