import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const Home = ({list}) => {
  const [opp, setOpp] = useState(list[0])
  const [score, setScore] = useState(0)
  const [choosed, setChoosed] = useState({match: '', url: '', ourl: ''})

  const shuffle = () => {
    const ind = Math.floor(Math.random() * list.length)
    setOpp(list[ind])
    setChoosed({match: '', url: '', ourl: ''})
  }

  const clicked = (id, img) => {
    if (id === opp.id) {
      setChoosed({match: 'IT IS DRAW', url: img, ourl: opp.imageUrl})
    } else if (id === 'ROCK' && opp.id === 'SCISSORS') {
      setChoosed({match: 'YOU WON', url: img, ourl: opp.imageUrl})
      setScore(score + 1)
    } else if (id === 'ROCK' && opp.id === 'PAPER') {
      setChoosed({match: 'YOU LOSE', url: img, ourl: opp.imageUrl})
      setScore(score - 1)
    } else if (id === 'PAPER' && opp.id === 'ROCK') {
      setChoosed({match: 'YOU WON', url: img, ourl: opp.imageUrl})
      setScore(score + 1)
    } else if (id === 'SCISSORS' && opp.id === 'ROCK') {
      setChoosed({match: 'YOU LOSE', url: img, ourl: opp.imageUrl})
      setScore(score - 1)
    } else if (id === 'SCISSORS' && opp.id === 'PAPER') {
      setChoosed({match: 'YOU WON', url: img, ourl: opp.imageUrl})
      setScore(score + 1)
    } else if (id === 'PAPER' && opp.id === 'SCISSORS') {
      setChoosed({match: 'YOU LOSE', url: img, ourl: opp.imageUrl})
      setScore(score - 1)
    }
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <p>Score</p>
      <p>{score}</p>
      {choosed.match === '' ? (
        <>
          <ul>
            {list.map(each => (
              <li key={each.id}>
                <button
                  data-testid={`${each.id.toLowerCase()}Button`}
                  onClick={() => clicked(each.id, each.imageUrl)}
                >
                  <img src={each.imageUrl} alt={each.id} />
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p>YOU</p>
          <img src={choosed.url} alt="" />
          <p>OPPONENT</p>
          <img src={choosed.ourl} alt="opponent choice" />
          <p>{choosed.match}</p>
          <button onClick={shuffle}>PLAY AGAIN</button>
        </>
      )}

      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            Rules
          </button>
        }
      >
        <div>
          <p>Rules</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </div>
      </Popup>
    </div>
  )
}

export default Home
