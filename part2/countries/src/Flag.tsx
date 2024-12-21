export const Flag = ({country}) => {
    const styles = {
        border: '1px solid grey',
    }
    return <img style={styles} src={country.flags.png}/>
}