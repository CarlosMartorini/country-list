import { useEffect, useState } from "react";
import { useCountries } from '../../providers/countries';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { FilterContainer, StyledButton, List } from "./styles";
import Pagination from '../../components/Pagination';

const Home = () => {

    const [ selectFilter, setSelectFilter ] = useState('');
    const [ inputSearch, setInputSearch ] = useState('')
    
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ countriesPerPage ] = useState(10);

    const {
        countries, 
        filteredList,
        getCountries,
        regionFilter,
        capitalFilter,
        countryFilter,
        callingCodeFilter,
        languageFilter
    } = useCountries();

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)
    
    const currentFilteredCountriesList = 
    filteredList === undefined
    ? 
    undefined 
    :
    filteredList.slice(indexOfFirstCountry, indexOfLastCountry)

    const handleButton = () => {
        if (selectFilter === 'region') {
            return regionFilter(inputSearch);
        } else if (selectFilter === 'capital') {
            return capitalFilter(inputSearch);
        } else if (selectFilter === 'country') {
            return countryFilter(inputSearch);
        } else if (selectFilter === 'callingcode') {
            return callingCodeFilter(inputSearch)
        } else if (selectFilter === 'language') {
            return languageFilter(inputSearch)
        } 
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <>
            <FilterContainer>
                <FormControl className='select_input'>
                    <InputLabel>Select a filter type</InputLabel>
                    <Select
                        value={selectFilter} 
                        onChange={(event) => setSelectFilter(event.target.value)}
                        placeholder='Select a filter type'
                        defaultValue='country'
                        style={{width: '200px'}}
                    >
                        <MenuItem value='region'>Region</MenuItem>
                        <MenuItem value='capital'>Capital</MenuItem>
                        <MenuItem value='country' default>Country</MenuItem>
                        <MenuItem value='callingcode'>Calling Code</MenuItem>
                        <MenuItem value='language'>Language</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    value={inputSearch} 
                    onChange={(event) => setInputSearch(event.target.value)}
                    label='Enter your search...'
                    style={{width: '250px'}}
                />
                <StyledButton
                    onClick={() => handleButton(inputSearch)}
                >Search</StyledButton>
            </FilterContainer>
            <List>
                {
                    currentFilteredCountriesList === undefined 
                    
                    ?

                    currentCountries.map((country, index) => (
                        <li key={index}><img src={country.flag} alt={country.name}/></li>
                    ))

                    :

                    currentFilteredCountriesList.map((country, index) => (
                        <li key={index}><img src={country.flag} alt={country.name}/></li>
                    ))
                }
            </List>
            <Pagination 
                countryPerPage={countriesPerPage} 
                totalCountries={filteredList === undefined ? countries.length : filteredList.length} 
                paginate={paginate}
            />
        </>
    );
}

export default Home;