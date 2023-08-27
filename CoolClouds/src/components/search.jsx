import { useState } from "react";




const Search = (onSearch) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if(searchQuery) {
            onSearch(searchQuery)
        }
    }

  return (
    <div>
        <input
            type="text" 
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a city..."
        />
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}
 
export default Search;