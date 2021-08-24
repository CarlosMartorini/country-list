import { useEffect, useState } from "react";
import { useCountries } from '../../providers/countries';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { FilterContainer, StyledButton, List } from "./styles";

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
        callingCodeFilter,
        languageFilter
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
        } else if (selectFilter === 'language') {
            console.log(`Language choose ${inputSearch} typed`)
            return languageFilter(inputSearch)
        } 
    }

    useEffect(() => {
        getCountries()
    }, [])

    console.log(filteredList)

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
                    filteredList === undefined ?

                    countries.map((country, index) => (
                        <li key={index}><img src={country.flag} alt={country.name}/></li>
                    ))

                    :

                    filteredList.map((country, index) => (
                        <li key={index}><img src={country.flag} alt={country.name}/></li>
                    ))
                }
            </List>
        </>
    );
}

export default Home;