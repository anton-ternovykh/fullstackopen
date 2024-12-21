export const Languages = ({languages}) => {
    return (
        <>
            <p>Languages</p>
            <ul>
                {Object.entries(languages).map((c) => <li key={c[0]}>{c[1]} ({c[0]})</li>)}
            </ul>
        </>
    )
}