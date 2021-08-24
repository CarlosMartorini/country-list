import { useState, createContext, useContext } from "react";
import { api } from '../../services/api'

const CountriesContext = createContext()

export const CountriesProvider = ({ children }) => {

    const [countries, setCountries ] = useState([]);

    const getCountries = () => {
        api.get('/all')
        .then((response) => setCountries(response.data))
    }

    const regionFilter = (searchInput) => {
        return countries.filter(
            (countrie) => { return countrie.region === searchInput}
        );
    }

    const capitalFilter = (searchInput) => {
        return countries.filter(
            (countrie) => { return countrie.capital === searchInput}
        );
    }

    const countryFilter = (searchInput) => {
        return countries.filter(
            (countrie) => { return countrie.name === searchInput}
        );
    }

    const callingCodeFilter = (searchInput) => {
        return countries.filter(
            (countrie) => { return countrie.callingCodes.includes(searchInput)}
        );
    }

    return (
        <CountriesContext.Provider
            value = {{
                countries,
                getCountries,
                regionFilter,
                capitalFilter,
                countryFilter,
                callingCodeFilter
            }}
        >
            {children}
        </CountriesContext.Provider>
    )
}

export const useCountries = () => useContext(CountriesContext)