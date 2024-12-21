import {Languages} from "./Languages.tsx";
import {Flag} from "./Flag.tsx";
import {Weather} from "./Weather.tsx";

export const Country = ({country = null}) => {
    if (country === null)
        return null;

    return (
        <>
            <h2>{country.name.official} ({country.name.common})</h2>
            <ul>
                <li>Capital: {country.capital[0]}</li>
                <li>Area: {country.area}</li>
            </ul>
            <Languages languages={country.languages}/>
            <Flag country={country}/>
            <Weather country={country}/>
        </>
    )
}