import { useState } from 'react';

const SearchInput = () => {

    const [ inputSearch, setInputSearch ] = useState('')

    return (
        <input 
            value={inputSearch} 
            onChange={(event) => setInputSearch(event.target.value)}
            placeholder='Enter your search...'
        />
    );
};

export default SearchInput;