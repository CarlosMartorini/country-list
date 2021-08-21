import { useState, createContext, useContext } from "react";
import { api } from '../../services/api'

const CountriesContext = createContext()

export const CountriesProvider = ({ children }) => {

    const [countries, setCountries ] = useState([]);

    const getCountries = () => {
        api.get('/all')
        .then((response) => setCountries(response.data))
    }

    return (
        <CountriesContext.Provider
            value = {{
                countries,
                getCountries
            }}
        >
            {children}
        </CountriesContext.Provider>
    )
}

export const useCountries = () => useContext(CountriesContext)