import React, { useState } from "react";
import Confetti from "react-confetti";

const DayPredictor = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [showFinalBox, setShowFinalBox] = useState(false);

  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  const steps = [
    "Contacting Jaadu 👽",
    "Consulting Elon Musk 🚀",
    "Contacting NASA satellites 🛰️",
    "Calling Stephen Hawking 📞",
    "Running DNA analysis 🧬",
    "Decrypting space-time ⏳",
    "Contacting Hubble telescope 🔭",
    "Getting the info from the day 📡",
    "Finalizing prediction ✅"
  ];

  // function to get next day
  const getNextDay = (day) => {
    const index = days.indexOf(day);
    const nextIndex = (index + 1) % days.length;
    return days[nextIndex];
  };

  const handlePredict = () => {
    setCurrentMessage("");
    setShowFinalBox(false);

    steps.forEach((step, i) => {
      setTimeout(() => {
        setCurrentMessage(step);
        if (i === steps.length - 1) {
          setTimeout(() => {
            setShowFinalBox(true);
          }, 1500);
        }
      }, i * 1500);
    });
  };

  return (
    <div className="container">
      <h1>Day Predictor Pro™</h1>
      <p>🎓khatrnak Project by Simran Sharma</p>
      <p>🧪 Powered by Advanced AI & Quantum Computing</p>

      <div>
        {days.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={selectedDay === day ? "selected" : ""}
          >
            {day}
          </button>
        ))}
      </div>

      <button onClick={handlePredict} disabled={!selectedDay} style={{marginTop:"20px"}}>
        🚀 Predict Next Day
      </button>

      {currentMessage && (
        <div className="loading-box">
          <p>{currentMessage}</p>
        </div>
      )}

      {showFinalBox && (
        <div className="final-box">
          <h2>YOU'RE RIGHT!</h2>
          <p>Yes, tomorrow is {getNextDay(selectedDay)}</p>
          <p>Certified Time Decoder</p>
          <p>"Finally you decoded the code."</p>
          <p>"Your IQ is higher than 99.9% of all humanity."</p>
          <button className="id-btn">⚡ Your IQ Level: Ultra Genius</button>
          <Confetti />
        </div>
      )}
    </div>
  );
};

export default DayPredictor;
