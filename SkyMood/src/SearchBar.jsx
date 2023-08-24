import React, {useState} from "react";
import useFetch from "./useFetch";

const SearchBar = () => {
    
    const [city, setCity] = useState('');
  
    const handleKeyDown = (event) => {
      if (event =='Enter') {
        useFetch(event.value);
        setCity(event.value)
      }
    };
  
    
    return (
        <form className='search-bar' onKeyDown={handleKeyDown()}>
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