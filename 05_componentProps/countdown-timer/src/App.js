import React, {useEffect, useState} from "react";
import "./App.css"
import fbIcon from "./assets/icon-facebook.svg" 
import pinIcon from "./assets/icon-pinterest.svg"
import instaIcon from "./assets/icon-instagram.svg"

const App = () => {

  const [timeleft, setTimeleft] = useState({});

  const [finaldate, setFinalDate] = useState(new Date());

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    var today = new Date();
    today.setDate(today.getDate() + 14)
    setFinalDate(today);
  }, [])
  

  useEffect(() => {
    const timer = setTimeout(() => {
      getTimeLeft();
    }, 100);
  });
  
  useEffect(() => {
    document.getElementById('minutes').style.transform = "rotateX(360deg)"
  }, [timeleft.minutes]);

  useEffect(() => {
    document.getElementById('hours').style.transform = "rotateX(360deg)"
  }, [timeleft.hours]);

  useEffect(() => {
    document.getElementById('days').style.transform = "rotateX(360deg)"
  }, [timeleft.days]);
  

  function getTimeLeft() {
    const difference = +finaldate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
        minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
      };
    }

    setTimeleft(timeLeft);
    
  }
  
  return (
    <div>
      <div className='main-div'>
        <h2 style={{ margin: 0, color: 'white', textAlign: 'center', fontFamily: 'Red Hat Text', letterSpacing: 5, margin: '0px 20px', marginTop: '20vh'}}>DAYS LEFT TO {finaldate.getDate() +" " + monthNames[finaldate.getMonth()].toUpperCase() +" "+ finaldate.getFullYear()}</h2>
        <div className='countdown-elements'>
          <div>
            <div id="days" className='numbers'>{timeleft.days}</div>
            <p className='title'>DAYS</p>
          </div>
          <div>
            <div id="hours" className='numbers'>{timeleft.hours}</div>
            <p className='title'>HOURS</p>
          </div>
          <div>
            <div id="minutes" className='numbers'>{timeleft.minutes}</div>
            <p className='title'>MINUTES</p>
          </div>
          <div>
            <div id="seconds" className='numbers'>{timeleft.seconds}</div>
            <p className='title'>SECONDS</p>
          </div>
        </div>
        <div className='footer-div'>
        </div>
        <div className='footer-icons'>
          <img src={fbIcon}></img>
          <img src={pinIcon}></img>
          <img src={instaIcon}></img>
        </div>
      </div>

    </div>

  )
}

export default App