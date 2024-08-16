import React, { useState, useEffect } from 'react';
import { FaCog, FaSignInAlt, FaBars } from 'react-icons/fa';

const Main = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('pomodoro'); // 'pomodoro', 'shortBreak', 'longBreak'

  useEffect(() => {
    let countdown = null;

    if (isRunning) {
      countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else if (seconds === 0 && minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else if (minutes === 0 && seconds === 0) {
          setIsRunning(false);
          clearInterval(countdown);
        }
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [isRunning, minutes, seconds]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handlePomodoro = () => {
    setMode('pomodoro');
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
  };

  const handleShortBreak = () => {
    setMode('shortBreak');
    setMinutes(5);
    setSeconds(0);
    setIsRunning(false);
  };

  const handleLongBreak = () => {
    setMode('longBreak');
    setMinutes(15);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={{ backgroundColor: '#60A5FA', minHeight: '100vh' }}>
      <header style={{ color: 'white', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '640px', margin: '0 auto' }}>
        {/* Left side - Menu button */}
        <button style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '4px', padding: '4px 9px' }}>
          <FaBars style={{ fontSize: '20px' }} />
          <span style={{ marginLeft: '8px' }}>Menu</span>
        </button>

        {/* Right side - Settings and Sign In buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '4px', padding: '4px 9px' }}>
            <FaCog style={{ fontSize: '20px' }} />
            <span style={{ marginLeft: '8px' }}>Setting</span>
          </button>

          <button style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '4px', padding: '4px 9px' }}>
            <FaSignInAlt style={{ fontSize: '20px' }} />
            <span style={{ marginLeft: '8px' }}>Sign In</span>
          </button>
        </div>
      </header>

      {/* Transparent container */}
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: '32px', maxWidth: '480px', margin: '40px auto', borderRadius: '8px', height: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* Pomodoro, Short Break, Long Break Buttons */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <button 
            style={{ padding: '3px 5px', borderRadius: '8px', backgroundColor: mode === 'pomodoro' ? 'rgba(75, 85, 99, 0.2)' : 'rgba(255, 255, 255, 0)', color: 'white' }}
            onClick={handlePomodoro}
          >
            Pomodoro
          </button>
          <button 
            style={{ padding: '3px 5px', borderRadius: '8px', backgroundColor: mode === 'shortBreak' ? 'rgba(75, 85, 99, 0.2)' : 'rgba(255, 255, 255, 0)', color: 'white' }}
            onClick={handleShortBreak}
          >
            Short Break
          </button>
          <button 
            style={{ padding: '3px 5px', borderRadius: '8px', backgroundColor: mode === 'longBreak' ? 'rgba(75, 85, 99, 0.2)' : 'rgba(255, 255, 255, 0)', color: 'white' }}
            onClick={handleLongBreak}
          >
            Long Break
          </button>
        </div>

        <div style={{ color: 'white', fontSize:'108px' , fontWeight: '800' }}>
          {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </div>
        <button 
          style={{ marginTop: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black', padding: '16px 32px', borderRadius: '8px', width: '160px', cursor: 'pointer' }}
          onClick={handleStartPause}
        >
          {isRunning ? 'PAUSE' : 'START'}
        </button>
      </div>

      {/* Display message below the container based on the mode */}
      <div style={{ textAlign: 'center', marginTop: '16px', color: 'white', fontSize: '24px' }}>
        {mode === 'pomodoro' ? 'Time to focus!' : 'Time for a break!'}
      </div>

      <div style={{ padding: '32px' }}>
        {/* Main content */}
      </div>
    </div>
  );
}

export default Main;
