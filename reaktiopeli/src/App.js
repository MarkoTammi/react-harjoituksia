import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Circles from './Circles/Circles'
import Points from './Points/Points'
import Control from './Control/Control'
import Popup from './Popup/Popup'


const getRndNum = (min,max) => {
  console.log('getRndNum : ' , Math.floor(Math.random() * (max-min+1))+min);
}

const App = () => {

  const [circle1State, setCircle1State] = useState('off')
  const [circle2State, setCircle2State] = useState('off')
  const [circle3State, setCircle3State] = useState('off')
  const [randomNumber, setRandomNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [intervalId, setIntervalId] = useState(null)
  const [endPopup, setEndPopup] = useState('off')

// Margitin tilat score - näyttää pisteet , current - aktiivinen pallo, rounds - kierrosten lukumäärä, endPopup

  // Event handler to start and run game
  const handlerStart = () => {
    //console.log('handlerStart')
      
      const gameMotor = () => {

        console.log('game motor/interval start')
        console.log('randomNum after start' , randomNumber)        
        console.log('intervalId', intervalId)
        let nextActive = undefined

        do {
          nextActive = Math.floor(Math.random()*10)
        } while (!(0 < x && x < 4 && x !== randomNumber))

        console.log('x after while: ', x)
        setRandomNumber(x)
        console.log('randomNumber after while : ', randomNumber)
        
        if (x === 1) {
          setCircle1State('on')
          setCircle2State('off')
          setCircle3State('off')
        }
        if (x === 2) {
          setCircle1State('off')
          setCircle2State('on')
          setCircle3State('off')
        }
        if (x === 3) {
          setCircle1State('off')
          setCircle2State('off')
          setCircle3State('on')
        }

      }

      setIntervalId(() => setInterval(gameMotor,1500))
    }

    // Event handler to handle circle clicks. Increase counter or stop game
    const handlerCircleClicks = () =>{
      //event.preventDefault()
      //console.log('event : ' , event.target )
      
      setScore(score+1)
       
    }

    const handlerStop = () => {
      console.log('handlerStop')
      clearInterval(intervalId)
      setCircle1State('off')
      setCircle2State('off')
      setCircle3State('off')
      setEndPopup('on')
    }

    const handlerClose = () => {
      console.log('handlerClose')
      setEndPopup('off')
      setScore(0)
    }

  return (
    <div className="App">
      <h5 className="Header">Reaktiopeli</h5>
      <Circles 
          circle1State={circle1State} 
          circle2State={circle2State} 
          circle3State={circle3State} 
          handlerCircleClicks={handlerCircleClicks}/>
      <Popup 
          endPopup={endPopup}
          score={score}
          handlerClose={handlerClose}/>
      <Points 
          score={score}/>
      <Control 
          handlerStart={handlerStart}
          handlerStop={handlerStop} />
    </div>
  );
}

export default App;
