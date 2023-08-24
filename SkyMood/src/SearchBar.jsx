import { useState } from "react";
import useFetch from "./useFetch";

const SearchBar = () => {
    
    const [city, setCity] = useState('');
  
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();  
            console.log(city)
        }
    };
  
    useFetch();
    return (
        <form className='search-bar' >
          <input
               type="text"
               placeholder="Enter city name"
               value={city}
               onChange={(e) => setCity(e.target.value)}
               onKeyDown={handleKeyDown}
          />
        </form>
    );
}
 
export default SearchBar;