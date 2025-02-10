import React, { useState, useEffect } from "react";

import './Estilos.css';
import './assets/img.png';

const App = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [emoji, setEmoji] = useState("💖");

  useEffect(() => {
    const targetDate = new Date("2025-02-15").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setDaysLeft(Math.ceil(difference / (1000 * 60 * 60 * 24)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleConfirm = () => {
    setModalOpen(true);
  };

  const toggleEmoji = () => {
    setEmoji(emoji === "💖" ? "💘" : "💖");
  };

  return (

    
    <div className="container" onClick={toggleEmoji}>
      <h1 className="title">{emoji} ¡Feliz San Valentín! {emoji}</h1>
      <p className="description">Te invito a una cita especial el 14 de febrero 💝</p>
      <p className="countdown">Faltan {daysLeft} días para nuestra cita ✨</p>
      <p className="location">📍 Lugar: Tu restaurante favorito</p>
      <p className="time">🕖 Hora: 7:00 PM</p>
      <button className="confirm-btn" onClick={handleConfirm}>Confirmar Asistencia 💌</button>
      

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>¡Tu asistencia ha sido confirmada! 💕</p>
            <button onClick={() => setModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};


 


export default App;

