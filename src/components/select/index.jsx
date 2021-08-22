import { useState } from 'react';

const SelectSearch = () => {

    const [ selectFilter, setSelectFilter ] = useState('');

    return (
        <select 
            value={selectFilter} 
            onChange={(event) => setSelectFilter(event.target.value)}
            placeholder='Select a filter type'
        >
            <option value='region'>Region</option>
            <option value='capital'>Capital</option>
            <option value='country' default>Country</option>
            <option value='callingcode'>Calling Code</option>
        </select>
    );
};

export default SelectSearch;