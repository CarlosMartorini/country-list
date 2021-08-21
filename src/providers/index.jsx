import { CountriesProvider } from './countries';

const Providers = ({ children }) => {
    return (
        <CountriesProvider>
            {children}
        </CountriesProvider>
    )
}

export default Providers;