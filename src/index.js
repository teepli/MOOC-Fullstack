import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <h1>
    <p>{props.kurssi}</p>
    </h1>
  )
}

const Osa = (props) => {
  return (
    <p>{props.osa} {props.tehtavia}</p>
  )
}

const Sisalto = (props) => {
  return (
    <div>     
      <Osa osa={props.osa1} tehtavia={props.tehtavia1} />
      <Osa osa={props.osa2} tehtavia={props.tehtavia2} />
      <Osa osa={props.osa3} tehtavia={props.tehtavia3} />
    </div>
  )
}


const Yhteensa = (props) => {
  return (
    <div>
      <p>Yhteensä {props.Yhteensa} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <h1><p>{kurssi.nimi}</p></h1>
      <p>{kurssi.osat[0].nimi} {kurssi.osat[0].tehtavia} </p>
      <p>{kurssi.osat[1].nimi} {kurssi.osat[1].tehtavia} </p>
      <p>{kurssi.osat[2].nimi} {kurssi.osat[2].tehtavia} </p>
      <p>Yhteensa {kurssi.osat[1].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia}</p>
     
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)