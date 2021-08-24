import { useEffect, useState } from "react";
import SelectSearch from "../../components/select";
import SearchInput from "../../components/input";
import ButtonSearch from "../../components/button";
import { useCountries } from '../../providers/countries';

const Home = () => {

    const [ selectFilter, setSelectFilter ] = useState('');
    const [ inputSearch, setInputSearch ] = useState('')

    const {
        countries, 
        getCountries,
        regionFilter,
        capitalFilter,
        countryFilter,
        callingCodeFilter 
    } = useCountries();

    useEffect(() => {
        getCountries()
    }, [])

    

    return (
        <>
            <SelectSearch
                value={selectFilter} 
                onChange={(event) => setSelectFilter(event.target.value)}
                placeholder='Select a filter type'
            />
            <SearchInput
                value={inputSearch} 
                onChange={(event) => setInputSearch(event.target.value)}
                placeholder='Enter your search...'
            />
            <ButtonSearch/>
            <ul>
                {
                    countries.map((country, index) => (
                        <li key={index}>{country.name}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default Home;