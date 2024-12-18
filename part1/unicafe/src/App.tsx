import {useState} from 'react'
import Header from "./Header.tsx";
import Button from "./Button.tsx";
import Statistics from "./Statistics.tsx";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header/>
            <Button onClick={() => setGood(good + 1)} name={'good'}/>
            <Button onClick={() => setNeutral(neutral + 1)} name={'neutral'}/>
            <Button onClick={() => setBad(bad + 1)} name={'bad'}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App