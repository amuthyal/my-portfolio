import React, { useEffect } from "react";
import "../styles/Loading.css"; // Import the CSS for animation

const Loading = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish(); // ✅ Ensure it only calls if `onFinish` exists
      }
    }, 2500); // Matches the animation duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
