export const CountryItem = ({country, onShowClick}) => {
    return (
        <>
            <p>
                {country.name.common}
                &nbsp;
                <button onClick={() => onShowClick(country)}>show</button>
            </p>
        </>
    )
}