import { useState, createContext, useContext } from "react";
import { api } from '../../services/api'

const CountriesContext = createContext()

export const CountriesProvider = ({ children }) => {

    const [countries, setCountries ] = useState([]);
    const [filteredList, setFilteredList] = useState();

    const getCountries = () => {
        api.get('/all')
        .then((response) => setCountries(response.data))
    }

    const regionFilter = (searchInput) => {
        let search = countries.filter(
            (countrie) => { return countrie.region === searchInput}
        );
        setFilteredList(search);
    }

    const capitalFilter = (searchInput) => {
        let search = countries.filter(
            (countrie) => { return countrie.capital === searchInput}
        );
        setFilteredList(search);
    }

    const countryFilter = (searchInput) => {
        let search = countries.filter(
            (countrie) => { return countrie.name === searchInput}
        );
        setFilteredList(search);
    }

    const callingCodeFilter = (searchInput) => {
        let search = countries.filter(
            (countrie) => { return countrie.callingCodes.includes(searchInput)}
        );
        setFilteredList(search);
    }

    const languageFilter = (searchInput) => {
        let search = countries.filter(
            (countrie) => countrie.languages.includes((language) => language.name === searchInput)
        );
        setFilteredList(search);
    }

    return (
        <CountriesContext.Provider
            value = {{
                countries,
                filteredList,
                getCountries,
                regionFilter,
                capitalFilter,
                countryFilter,
                callingCodeFilter,
                languageFilter
            }}
        >
            {children}
        </CountriesContext.Provider>
    )
}

export const useCountries = () => useContext(CountriesContext)