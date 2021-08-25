import { CardCountry } from "./styles"

const CountryCard = ({ country }) => {
    return (
        <CardCountry>
            <div>
                <img src={country.flag} alt={country.name}/>
            </div>
            <div>
                <h5>Nome: {country.name}</h5>
                <h5>Capital: {country.capital}</h5>
                <h5>Região: {country.region}</h5>
                <h5>Sub-região: {country.subregion}</h5>
                <h5>População: {country.population}</h5>
                <h5>Linguas: {country.languages.map((language) => {return language.name})}</h5>
            </div>
        </CardCountry>
    )
}

export default CountryCard