import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";
function SplashScreen(props) {
  const navigate = useNavigate();
  const [time, setTime] = useState(props.maxrange);
  useEffect(() => {
    if (time > 0) {
      const timeoutId = setTimeout(() => setTime(time - 1), 1000);
    } else {
      handleNavigation();
    }
  }, [time]);
  const handleNavigation = () => {
    navigate("/login");
  };

  return (
    <div className="bg">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "900",
          aligntems: "center",
          paddingTop: "50px",
          paddingLeft: "500px",
        }}
      >
        A Film is a Petrified Fountain of Thought.
      </p>
      <div className="cont" style={{ paddingLeft: "560px" }}>
        <div className="spinner" id="load"></div>
        <div className="spinner" id="load2"></div>
        <div className="spinner" id="load3"></div>
        <div className="spinner" id="load4"></div>
        <div id="txt">{time}</div>
      </div>
    </div>
  );
}

export default SplashScreen;
/*
       <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={['#bc8c5b', '#bc8c5b']}
          colorsTime={[5, 0]}
          onComplete={() => [false,handleNavigation()]}>
        {getTime}
        </CountdownCircleTimer>

         const getTime = ({ remainingTime }) => {
        return (
          <div className="timer">
           
            <div className="value">{remainingTime}</div>
          
          </div>
        );
      };
      */
