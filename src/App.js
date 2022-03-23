
import {useState} from 'react';


const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}{props.extra}</p>
    </div>
  )
}

  const Statistics = (props) => {
    if(props.allClicks.length === 0){
      return (
        <p>No feedback given.</p>
      )
    }
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticsLine text="good" value={props.good}/>
        <StatisticsLine text="neutral" value={props.neutral}/>
        <StatisticsLine text="bad" value={props.bad}/>
        <StatisticsLine text="all" value={props.all}/>
        <StatisticsLine text="average" value={props.avg}/>
        <StatisticsLine text="positive" value={props.positive} extra="%"/>
      </div>
    )
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks,setAllClicks] = useState([]);
  const all = good+neutral+bad;
  const avg = good-bad;
  const average = avg/all;
  const positive = good/all*100;
  const goodHandler = () => {
    allClicks.push('G');
    setAllClicks(allClicks);
    setGood(good + 1)

  }

  const neutralHandler = () => {
    allClicks.push('N');
    setAllClicks(allClicks);
    setNeutral(neutral + 1)

  }

  const badHandler = () => {
    allClicks.push('B');
    setAllClicks(allClicks);
    setBad(bad + 1)

  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={goodHandler}/> 
      <Button text="neutral" handleClick={neutralHandler} />
      <Button text="bad" handleClick={badHandler}/>
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      avg={average}
      positive={positive}
      allClicks={allClicks}/>
    </div>
  )
}

export default App