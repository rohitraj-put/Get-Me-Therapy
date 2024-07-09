import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Quotes from './Quotes';
import toast, { Toaster } from 'react-hot-toast';

const Tracking = () => {
  const [time, setTime] = useState(new Date());
  const [speed, setSpeed] = useState(1);
  const [intervalId, setIntervalId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const savedSpeed = new URLSearchParams(location.search).get('speed');
    if (savedSpeed) {
      setSpeed(parseFloat(savedSpeed));
    }
  }, [location.search]);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);

    setIntervalId(id);
    return () => clearInterval(id);
  }, [speed]);

  const handleSliderChange = (e) => {
    setSpeed(parseFloat(e.target.value));
  };

  const handleShare = () => {
    const url = `${window.location.origin}/tracking?speed=${speed}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("URL copied to clipboard!");
    });
  };

  return (
    <>
      <div className="tracking-container">
        <h2 className="tracking-title">Digital Watch</h2>
        <div className="time-display">
          {time.toLocaleTimeString()}
        </div>
        <input
          className="speed-slider"
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          value={speed}
          onChange={handleSliderChange}
        />
        <button className="share-button" onClick={handleShare}>Share</button>
        <Quotes />
        <Toaster />
      </div>
    </>
  );
};

export default Tracking;
