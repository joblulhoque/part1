
import {useState} from 'react';

  const Statistics = (props) => {
    const {good,neutral,bad,all,avg} = props;
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

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad;
  const avg = good-bad;
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral + 1)}>neutral</button>
      <button onClick={()=> setBad(bad + 1)}>bad</button>
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      avg={avg}/>
    </div>
  )
}

export default App