import { useEffect } from "react";
import { useCountries } from '../../providers/countries';

const Home = () => {

    const { countries, getCountries } = useCountries();

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <ul>
            {
                countries.map((country, index) => (
                    <li key={index}>{country.name}</li>
                ))
            }
        </ul>
    );
}

export default Home;