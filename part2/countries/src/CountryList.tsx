import {CountryItem} from "./CountryItem.tsx";

export const CountryList = ({countries, onShowClick}) => {
    return countries.map((country) => <CountryItem key={country.name.official} country={country}
                                                   onShowClick={onShowClick}/>)
}
