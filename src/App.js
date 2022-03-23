
import {useState} from 'react';

  const Statistics = (props) => {
    const {good,neutral,bad,all,avg,allClicks} = props;
    if(allClicks.length === 0){
      return (
        <div>
          <h1>No feedback yet</h1>
        </div>
      )
    } else {
    return (
      <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {avg/all}</p>
      <p>positive {good/all * 100}%</p>
      </div>
    )
    }
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks,setAllClicks] = useState([]);
  const all = good+neutral+bad;
  const avg = good-bad;
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
      <button onClick={goodHandler}>good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button>
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      avg={avg}
      allClicks={allClicks}/>
    </div>
  )
}

export default App