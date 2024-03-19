// CountdownTimer.jsx

import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; 

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = value => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="countdown-timer">
      {timeLeft.days > 0 && (
        <div>
          {addLeadingZero(timeLeft.days)} {timeLeft.days === 1 ? 'Day' : 'Days'}
        </div>
      )}
      <div>
        {addLeadingZero(timeLeft.hours)}:
        {addLeadingZero(timeLeft.minutes)}:
        {addLeadingZero(timeLeft.seconds)}
      </div>
    </div>
  );
}

export default CountdownTimer;
