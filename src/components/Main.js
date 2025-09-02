import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const handleHover = (e) => {
    e.target.style.background = "rgba(255, 255, 255, 0.4)";
  };

  const handleLeave = (e) => {
    e.target.style.background = "rgba(255, 255, 255, 0.2)";
  };

  // 입자/별 요소
  const stars = Array.from({ length: 50 }, (_, i) => <div key={i} className="star"></div>);
  const sparkles = Array.from({ length: 20 }, (_, i) => <div key={i} className="sparkle"></div>);

  return (
    <div className="main-container">
      {stars}
      {sparkles}

      <h1 className="title">마법의 카드 뽑기</h1>
      <div className="button-group">
        <button onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => navigate("/problem")}>
          고민 해결
        </button>
        <button onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => navigate("/fortune")}>
          오늘의 운세 보기
        </button>
      </div>

      <style>{`
        .main-container {
          position: relative;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #4b0082, #8a2be2, #00ffff);
          overflow: hidden;
          font-family: 'Jua', sans-serif;
          color: #fff;
          text-align: center;
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 50px;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
          animation: floatTitle 3s ease-in-out infinite;
        }

        @keyframes floatTitle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .button-group {
          display: flex;
          justify-content: center;
        }

        button {
          padding: 15px 30px;
          margin: 10px;
          font-size: 1.2rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 0 15px rgba(255,255,255,0.3);
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          font-family: 'Jua', sans-serif;
          animation: floatButton 3s ease-in-out infinite;
        }

        @keyframes floatButton {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* 별/입자 애니메이션 */
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

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #fff, #fffd82);
          border-radius: 50%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: sparkleAnim ${2 + Math.random() * 2}s ease-in-out infinite alternate;
        }
        @keyframes sparkleAnim {
          0% { transform: scale(0.5) rotate(0deg); opacity: 0.5; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
          100% { transform: scale(0.5) rotate(360deg); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default Main;
