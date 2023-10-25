import { useState } from "react";

function SearchInput(onSearch) {
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
        />
        <button onClick={handleSubmit}/>
    </div>
  )
}

export default SearchInput