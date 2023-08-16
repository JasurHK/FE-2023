import { useState, useEffect } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);   
     
    useEffect(()=>{
        console.log('useEffect ran')
        // don't use setTimeout in a real world project !!! 
        setTimeout(() => {
          fetch(url)
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
          })
          .catch(err =>{
             setError(err.message);
             setIsPending(false);
          })
        }, 1000);
      }, [url]);

      return {data, isPending, error}
}

export default useFetch;