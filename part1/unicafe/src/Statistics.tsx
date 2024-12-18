import NoFeedbackGiven from "./NoFeedbackGiven.tsx";
import StatisticLine from "./StatisticLine.tsx";

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad;
    const average = (good - bad) / all || 0;
    const positive = good / all * 100 || 0;
    const total = good + neutral + bad;

    return (
        <>
            <h1>statistics</h1>
            {total === 0
                ? <NoFeedbackGiven/>
                : <table>
                    <tbody>
                        <StatisticLine text={"good"} value={good}/>
                        <StatisticLine text={"neutral"} value={neutral}/>
                        <StatisticLine text={"bad"} value={bad}/>
                        <StatisticLine text={"all"} value={all}/>
                        <StatisticLine text={"average"} value={average}/>
                        <StatisticLine text={"positive"} value={positive} format={'%'}/>
                    </tbody>
                </table>
            }
        </>
    )
    // }
}

export default Statistics;