import { useEffect } from "react";
import SelectSearch from "../../components/select";
import SearchInput from "../../components/input";
import ButtonSearch from "../../components/button";
import { useCountries } from '../../providers/countries';

const Home = () => {

    const { countries, getCountries } = useCountries();

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <>
            <SelectSearch/>
            <SearchInput/>
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