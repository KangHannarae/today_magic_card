import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import problemData from "../data/problem_solving.json";

function ProblemSolving() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardText, setCardText] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleDrawCard = () => {
    if (!inputValue) return alert("먼저 고민을 입력해주세요!");

    setLoading(true);
    setCardText("");
    setAnimate(false);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * problemData.problem_solving.length);
      setCardText(problemData.problem_solving[randomIndex]);
      setAnimate(true);
      setLoading(false);
    }, 3000);
  };

  const stars = Array.from({ length: 30 }, (_, i) => <div key={i} className="star"></div>);
  const sparks = Array.from({ length: 15 }, (_, i) => <div key={i} className="spark"></div>);

  return (
    <div className="problem-container">
      {stars}
      {sparks}

      <h1>고민 해결</h1>

      <input
        placeholder="어떤 고민이 있으신가요?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {!cardText && !loading && (
        <button onClick={handleDrawCard}>카드 뽑기</button>
      )}

      {loading && (
        <div className="loading-container">
          <p className="loading-text">✨ 마법카드를 섞고있습니다.. ✨</p>
          <Card text="?" />
        </div>
      )}

      {cardText && (
        <>
          <div className={`card-wrapper ${animate ? "animate-card" : ""}`}>
            <Card text={cardText} />
            <div className="magic-aurora"></div>
          </div>
          <div className="btn-group">
            <button onClick={() => setCardText("")}>다시 뽑기</button>
            <button onClick={() => navigate("/")}>돌아가기</button>
          </div>
        </>
      )}

      <style>{`
        .problem-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at top, #4b0082, #8a2be2, #00ffff);
          font-family: 'Jua', sans-serif;
          color: #fff;
          text-align: center;
          overflow: hidden;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          text-shadow: 0 0 10px #fff, 0 0 20px #ff82df;
        }

        input {
          padding: 12px 20px;
          border-radius: 10px;
          border: none;
          font-size: 1rem;
          margin-bottom: 20px;
          width: 300px;
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
          font-family: 'Jua', sans-serif;
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
          margin-bottom: 20px;
          animation: glow 1.5s infinite alternate;
        }
        @keyframes glow {
          from { text-shadow: 0 0 10px #fff, 0 0 20px #fff; }
          to { text-shadow: 0 0 30px #fffd82, 0 0 60px #ff82df, 0 0 90px #82ffea; }
        }

        .card-wrapper {
          position: relative;
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

        /* 마법 오라 */
        .magic-aurora {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 360px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%);
          animation: auroraPulse 1.5s infinite alternate;
          pointer-events: none;
          z-index: -1;
        }
        @keyframes auroraPulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 0.5; }
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          top: ${Math.random()*100}%;
          left: ${Math.random()*100}%;
          animation: twinkle ${1 + Math.random()*2}s infinite alternate;
        }
        @keyframes twinkle {
          from { opacity: 0.2; }
          to { opacity: 1; }
        }

        .spark {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #fff, #ff82df);
          border-radius: 50%;
          top: ${Math.random()*100}%;
          left: ${Math.random()*100}%;
          animation: sparkMove ${1 + Math.random()*2}s ease-in-out infinite alternate;
        }
        @keyframes sparkMove {
          0% { transform: translate(0,0) scale(1); opacity: 1; }
          50% { transform: translate(10px,-10px) scale(1.2); opacity: 0.7; }
          100% { transform: translate(0,0) scale(1); opacity: 1; }
        }

        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default ProblemSolving;
