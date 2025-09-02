import React from "react";

function Card({ text }) {
  const cardStyle = {
    width: "320px",
    height: "200px",
    padding: "20px",
    background: "linear-gradient(135deg, #f8f0ff, #e0c3fc, #a18cd1)",
    color: "#000", // 글자 색 검정
    textShadow: "2px 2px 8px rgba(255,255,255,0.6)", // 흰색 오라 그림자
    borderRadius: "20px",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "700",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 15px rgba(255,255,255,0.2) inset",
    border: "2px solid gold",
    transform: "translateY(-50px)",
    animation: "slideIn 0.7s forwards",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Jua', sans-serif",
    position: "relative",
    overflow: "hidden",
  };

  const auraStyle = {
    content: "''",
    position: "absolute",
    width: "120%",
    height: "120%",
    top: "-10%",
    left: "-10%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
    animation: "pulse 2s infinite",
    pointerEvents: "none",
  };

  const sparkleStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background:
      "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px) repeat",
    backgroundSize: "10px 10px",
    opacity: 0.3,
    pointerEvents: "none",
  };

  return (
    <div style={cardStyle}>
      <div style={auraStyle}></div>
      <div style={sparkleStyle}></div>
      {text}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(0.9); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.9; }
            100% { transform: scale(0.9); opacity: 0.6; }
          }
        `}
      </style>
    </div>
  );
}

export default Card;
