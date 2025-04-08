import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const bars = [1, 5, 10, 30, 40, 50, 70, 100];

  const ProgressBar = ({ progress }) => {
    const [animated, setAnimated] = useState(0);

    useEffect(()=>{
      setTimeout(()=> setAnimated(progress),100)
    },[progress])
    
    return (
      <div className="outer">
        <div
          className="inner"
          style={{
            // width: `${progress}%`,
            transform: `translateX(${animated - 100}%)`,
            backgroundColor: animated < 40 ? "black" : "green",
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax="100"
          aria-valuemin="0"
        >
          {progress}%
        </div>
      </div>
    );
  };

  return (
    <>
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </>
  );
}

export default App;
