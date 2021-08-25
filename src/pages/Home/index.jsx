import { useEffect, useState } from "react";
import { useCountries } from '../../providers/countries';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { FilterContainer, StyledButton, List } from "./styles";
import Pagination from '../../components/Pagination';
import CountryCard from "../../components/CountryCard";

const Home = () => {

    const [ selectFilter, setSelectFilter ] = useState('');
    const [ inputSearch, setInputSearch ] = useState('')
    const [ cardCountry, setCardCountry ] = useState();
    
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
        if (selectFilter === 'Região') {
            return regionFilter(inputSearch);
        } else if (selectFilter === 'Capital') {
            return capitalFilter(inputSearch);
        } else if (selectFilter === 'País') {
            return countryFilter(inputSearch);
        } else if (selectFilter === 'Código de Ligação') {
            return callingCodeFilter(inputSearch)
        } else if (selectFilter === 'Lingua') {
            return languageFilter(inputSearch)
        } 
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const showInfoCountry = (list, countryId) => {
        setCardCountry(list[countryId]);
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <>
            <FilterContainer>
                <FormControl>
                    <InputLabel>Filtrar por</InputLabel>
                    <Select
                        value={selectFilter} 
                        onChange={(event) => setSelectFilter(event.target.value)}
                        placeholder='Select a filter type'
                        defaultValue='country'
                        style={{width: '200px'}}
                    >
                        <MenuItem value='Região'>Região</MenuItem>
                        <MenuItem value='Capital'>Capital</MenuItem>
                        <MenuItem value='País'>País</MenuItem>
                        <MenuItem value='Código de Ligação'>Código de Ligação</MenuItem>
                        <MenuItem value='Lingua'>Lingua</MenuItem>
                    </Select>
                </FormControl>
                {
                    selectFilter !== '' 
                    
                    ?

                    <TextField
                        value={inputSearch} 
                        onChange={(event) => setInputSearch(event.target.value)}
                        label={selectFilter}
                        style={{width: '250px'}}
                    />

                    :

                    <></>
                }
                <StyledButton
                    onClick={() => handleButton(inputSearch)}
                >Search</StyledButton>
            </FilterContainer>
            <div>
                {
                    cardCountry !== undefined ?
                    
                    <CountryCard country={cardCountry}/>

                    :

                    <></>
                }
            </div>
            <List>
                {
                    currentFilteredCountriesList === undefined 
                    
                    ?

                    currentCountries.map((country, index) => (
                        <li key={index}>
                            <a onClick={() => showInfoCountry(currentCountries, index)} href='!#'>
                                <img src={country.flag} alt={country.name}/>
                            </a>
                        </li>
                    ))

                    :

                    currentFilteredCountriesList.map((country, index) => (
                        <li key={index}>
                            <a onClick={() => showInfoCountry(currentFilteredCountriesList, index)} href='!#'>
                                <img src={country.flag} alt={country.name}/>
                            </a>
                        </li>
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