import {useEffect, useState} from 'react'
import countryService from './countries.js';
import {CountryList} from "./CountryList.tsx";
import {Country} from "./Country.tsx";


const App = () => {

    const [filter, setFilter] = useState<string>('')
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        countryService.getAll()
            .then(data => setCountries(data));
    }, []);

    useEffect(() => {
        const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));
        if (filteredCountries.length === 1) {
            setSelectedCountry(filteredCountries[0]);
        } else if (filteredCountries.length === 0) {
            setSelectedCountry(null);
        }

        setFilteredCountries(filteredCountries);
    }, [filter]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value)
    }

    const handleShowClick = (country) => {
        setSelectedCountry(country);
    }

    return (
        <>
            <p>find countries <input value={filter} onChange={handleInputChange}/></p>
            {
                filter.length > 0
                    ? filteredCountries.length > 10
                        ? 'Too many matches, specify another filter'
                        : <CountryList countries={filteredCountries} onShowClick={handleShowClick}/>
                    : ''
            }
            {
                <Country country={selectedCountry}/>
            }
        </>
    )
}

export default App
