import { useEffect, useState } from "react";
import { useCountries } from '../../providers/countries';

const Home = () => {

    const [ selectFilter, setSelectFilter ] = useState('');
    const [ inputSearch, setInputSearch ] = useState('')

    const {
        countries, 
        filteredList,
        getCountries,
        regionFilter,
        capitalFilter,
        countryFilter,
        callingCodeFilter 
    } = useCountries();

    const handleButton = () => {
        if (selectFilter === 'region') {
            console.log(`Region choose ${inputSearch} typed`)
            return regionFilter(inputSearch);
        } else if (selectFilter === 'capital') {
            console.log(`Capital choose ${inputSearch} typed`)
            return capitalFilter(inputSearch);
        } else if (selectFilter === 'country') {
            console.log(`Country choose ${inputSearch} typed`)
            return countryFilter(inputSearch);
        } else if (selectFilter === 'callingcode') {
            console.log(`Calling Code choose ${inputSearch} typed`)
            return callingCodeFilter(inputSearch)
        }   
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <>
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
            <input
                value={inputSearch} 
                onChange={(event) => setInputSearch(event.target.value)}
                placeholder='Enter your search...'
            />
            <button
                onClick={() => handleButton(inputSearch)}
            >Search</button>
            <ul>
                {
                    filteredList === undefined ?

                    countries.map((country, index) => (
                        <li key={index}>{country.name}</li>
                    ))

                    :

                    filteredList.map((country, index) => (
                        <li key={index}>{country.name}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default Home;