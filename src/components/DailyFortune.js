import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import dailyData from "../data/daily_fortune.json";

function DailyFortune() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cardText, setCardText] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleDrawCard = () => {
    setLoading(true);
    setCardText("");
    setAnimate(false);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dailyData.daily_fortune.length);
      setCardText(dailyData.daily_fortune[randomIndex]);
      setAnimate(true);
      setLoading(false);
    }, 3000);
  };

  const stars = Array.from({ length: 50 }, (_, i) => <div key={i} className="star"></div>);
  const planets = Array.from({ length: 5 }, (_, i) => <div key={i} className={`planet planet${i}`}></div>);
  const meteors = Array.from({ length: 10 }, (_, i) => <div key={i} className="meteor"></div>);

  return (
    <div className="daily-fortune-container">
      {stars}
      {planets}
      {meteors}

      <h1>오늘의 운세</h1>

      {!cardText && !loading && (
        <button onClick={handleDrawCard}>운세 보기</button>
      )}

      {loading && <p className="loading-text">✨ 별의 기운을 느끼고 있습니다... ✨</p>}

      {cardText && (
        <>
          <div className={`card-wrapper ${animate ? "animate-card" : ""}`}>
            <Card text={cardText} type="fortune" />
          </div>
          <div className="btn-group">
            <button style={{ fontFamily: "'Jua', sans-serif" }} onClick={() => setCardText("")}>
              다시 뽑기
            </button>
            <button style={{ fontFamily: "'Jua', sans-serif" }} onClick={() => navigate("/")}>
              돌아가기
            </button>
          </div>
        </>
      )}

      <style>{`
        .daily-fortune-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
          overflow: hidden;
          font-family: 'Jua', sans-serif;
          color: #fff;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          text-shadow: 2px 2px 15px rgba(0,0,0,0.7);
        }

        button {
          padding: 12px 25px;
          font-size: 1.2rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          background: rgba(255,255,255,0.2);
          color: #fff;
          box-shadow: 0 0 15px rgba(255,255,255,0.3);
          margin: 10px;
          transition: 0.3s;
        }
        button:hover {
          background: rgba(255,255,255,0.4);
        }

        .btn-group {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .loading-text {
          font-size: 1.5rem;
          margin-top: 20px;
          animation: glow 1.5s infinite alternate;
        }
        @keyframes glow {
          from { text-shadow: 0 0 10px #fff, 0 0 20px #fff; }
          to { text-shadow: 0 0 30px #fffd82, 0 0 60px #ff82df, 0 0 90px #82ffea; }
        }

        .card-wrapper {
          margin-top: 30px;
          transform: translateY(-100px) scale(0.8);
          opacity: 0;
        }
        .animate-card {
          animation: slideDown 0.8s forwards;
        }
        @keyframes slideDown {
          0% { transform: translateY(-100px) scale(0.8); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: twinkle ${1 + Math.random() * 2}s infinite alternate;
        }
        @keyframes twinkle {
          from { opacity: 0.2; }
          to { opacity: 1; }
        }

        .planet {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ff7f50, #ff4500);
          width: 50px;
          height: 50px;
          top: ${Math.random() * 80 + 10}%;
          left: ${Math.random() * 80 + 10}%;
          animation: rotatePlanet ${10 + Math.random() * 20}s linear infinite;
        }
        @keyframes rotatePlanet {
          0% { transform: rotate(0deg) translateX(0px) rotate(0deg); }
          50% { transform: rotate(180deg) translateX(20px) rotate(-180deg); }
          100% { transform: rotate(360deg) translateX(0px) rotate(-360deg); }
        }

        .meteor {
          position: absolute;
          width: 3px;
          height: 10px;
          background: linear-gradient(white, transparent);
          top: ${Math.random() * 80}%;
          left: ${Math.random() * 100}%;
          transform: rotate(45deg);
          animation: fall ${1 + Math.random() * 1.5}s linear infinite;
        }
        @keyframes fall {
          0% { transform: translateY(0) rotate(45deg); opacity: 1; }
          100% { transform: translateY(500px) rotate(45deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default DailyFortune;
