const useFetch = () => {
    useEffect(()=>{
        fetch(url , options)
        .then(res=>{
          return res.json()
        })
        .then((data)=> {
          return data
        })
        },[])
}
 
export default useFetch;