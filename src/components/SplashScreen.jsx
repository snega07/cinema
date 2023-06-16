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
    
        <div className="row">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "900",
          paddingTop: "100px",
          paddingLeft:"500px"
        }}
      >

        A Film is a Petrified Fountain of Thought.
      </p>
      </div>
      <div className="row"> 
      <div className="cont" style={{ paddingLeft: "560px",paddingTop:"30px" }}>
        <div className="spinner" id="load"></div>
        <div className="spinner" id="load2"></div>
        <div className="spinner" id="load3"></div>
        <div className="spinner" id="load4"></div>
        <div id="txt">{time}</div>
      </div>
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
