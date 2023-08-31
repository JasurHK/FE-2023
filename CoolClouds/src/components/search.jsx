import { useState } from "react";
import "../styles/searchBar.css"




const Search = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');   
    // const [isSearchVisible, setSearchVisible] = useState(false);

    const handleSubmit = async() => {
        if(searchQuery) {
            await onSearch(searchQuery)
            // setSearchVisible(false); // Hide the search bar after submitting
            setSearchQuery(''); // Clear the search query
        }
    }
    const handleKeyDown = async(event) => {
        if (event.key === 'Enter') {
          await handleSubmit();
          // setSearchVisible(false);
        } 
      };
    const toggleElement=()=> {
        // setSearchVisible(!isSearchVisible);
        handleSubmit();
    }
  // {`searchBar ${isSearchVisible ? 'active' : ''}`}
  return (
    <div className='searchBar'> 
        
        <input
            id="searchBar"
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a city..."
            onKeyDown={handleKeyDown}
            // style={{ transform: isSearchVisible ? 'scaleX(1)' : 'scaleX(0)' }}
        />
        <button onClick={toggleElement} id="searchBtn">
            {/* {isSearchVisible ? 'Enter' : 'Search'} */}
            Search
        </button>
    </div>
  )
}
 
export default Search;