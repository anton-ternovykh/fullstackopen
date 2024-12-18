const StatisticLine = ({text, value, format = ''}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}{format}</td>
        </tr>
    )
}

export default StatisticLine;