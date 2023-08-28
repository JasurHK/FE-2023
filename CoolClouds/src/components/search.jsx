import { useState } from "react";
import "../styles/searchBar.css"




const Search = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setSearchVisible] = useState(false);

    const handleSubmit = async() => {
        if(searchQuery) {
            await onSearch(searchQuery)
            setSearchVisible(false); // Hide the search bar after submitting
            setSearchQuery(''); // Clear the search query
        }
    }
    const handleKeyDown = async(event) => {
        if (event.key === 'Enter') {
          await handleSubmit();
        //   let element = document.getElementById("searchBar");
        //   let secondE = document.getElementById("searchBtn");
        //   element.style.display = "none";
        //   element.value = ""
        //   secondE.style.display = "block";
        } 
      };
    const toggleElement=()=> {
        setSearchVisible(!isSearchVisible);
        handleSubmit();
        // let element = document.getElementById("searchBar");
        // let secondE = document.getElementById("searchBtn");
        // if (element.style.display === "none") {
        //   element.style.display = "block"; // Or any other display value you want to use
        //   secondE.style.display = "none"; 
        // } else {
        //   element.style.display = "none";
        //   secondE.style.display = "block";
        // }
    }

  return (
    <div className={`searchBar ${isSearchVisible ? 'active' : ''}`}>
        <input
            id="searchBar"
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a city..."
            onKeyDown={handleKeyDown}
            style={{ transform: isSearchVisible ? 'scaleX(1)' : 'scaleX(0)' }}
        />
        <button onClick={toggleElement} id="searchBtn">
            {isSearchVisible ? 'Enter' : 'Search'}
        </button>
    </div>
  )
}
 
export default Search;