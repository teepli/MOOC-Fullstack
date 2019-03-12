import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = ({good, neutral, bad, allClicks}) => {
    
    if (allClicks === 0) {
        return (
            <div>Ei statistiikkaa</div>
        )
    }
    return ( 
        <div>
        <Statistic text="Hyvä" value={good} />
        <Statistic text="Neutraali" value={neutral} />
        <Statistic text="Huono" value={bad} />
        <Statistic text="Yhteensä" value={good + bad + neutral} />
        <Statistic text="Keskiarvo" value={(good - bad) / (good + bad + neutral)} />
        <Statistic text="Positiivisia" value={good / (good + bad + neutral) * 100} text2="%" />
        </div>
    )
}

const Statistic = ({text, value, text2}) => {
  
  return (
    <p>{text} {value} {text2}</p>   
  )
}

const Button = (props) => (
    <Button onClick={props.handleClick}> {props.text} </Button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)

  const HandleGood = () => {
    setGood(good + 1)
    setAllClicks(allClicks + 1)
    console.log(good)
}


const handleNeutral = () => {
  setNeutral(neutral + 1)
  setAllClicks(allClicks + 1)
  console.log(neutral)
}

const handleBad = () => {
  setBad(bad + 1)
  setAllClicks(allClicks + 1)
  console.log(bad)
}

  
  return (
    <div>
      <h1>Unicafe</h1>
      <Button handleClick={HandleGood} text={"Hyvä"}></Button>
      <Button handleClick={handleNeutral} text={"Neutraali"}></Button>    
      <Button handleClick={handleBad} text={"Huono"}></Button>
      
      <h1>Tilastot</h1>
      <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)