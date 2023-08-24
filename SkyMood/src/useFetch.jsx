import { useState, useEffect } from "react";



const useFetch  = (cityName)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);   
     
    useEffect(()=>{
        const abortCont = new AbortController();
        // don't use setTimeout in a real world project !!! 
        fetch((`https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=aea35f50e133b4ecc36b1033d7d54938`),{
            method: 'get'
          })
          .then(res =>{
            if(!res.ok){
              throw Error('404 error (not found)')
            }
            return res.json();
          })
          .then(data =>{
            setData(data);
            setIsPending(false);
            setError(null);
            console.log(data)
          })
          .catch(err =>{
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            }
            else {
              setError(err.message);
              setIsPending(false);
            }
             
          })
        return ()=> abortCont.abort
      }, [cityName]);

      return {data, isPending, error}
}

export default useFetch;
