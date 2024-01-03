import { useEffect, useState } from "react";
import "./ProgressBar.css";


export default function ProgressBar() {
  
    /*
    useEffect(() => {
      if (progressProportion <= 1) {
        setProgress(Math.round(progressProportion * 100));
      }
      else {
        setProgress(100);
      }
      
    }

    );*/

    const startDate = new Date('December 31, 2023 17:00:00');
    const endDate = new Date('December 31, 2023 22:00:00');
    const semDuration = endDate.getTime() - startDate.getTime();
    const [progress, setProgress] = useState(0);  // declare state var called progress
    // useState is a Hook; returns a value and a function that allows mod of the value

    useEffect(() => {
      
      let currDate = new Date();
      let timePassed = currDate.getTime() - startDate.getTime();
      let progressProportion = timePassed / semDuration;

      const updateProgress = () => {
        if (progressProportion <= 1) {
          setProgress(Math.round(progressProportion * 100));
        }
        else {
          setProgress(100);
        }
      }

      const intervalId = setInterval(updateProgress, 1000);

});
 
    

  


 
  /*
    const handleClick = () => {
      if (progress < 100) {
        setProgress(progress + 10);
      }

    }

    const handleClickReset = function() {
      setProgress(0);
    }
*/





  return <div className="container">
      <div className="progress-bar">
      
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>

      </div>
      <div className="progress-percent">{progress}%</div>
      
    </div>
  ;
}


  /*

  <button onClick={handleClick}>Change Progress</button>
      <button onClick={handleClickReset}>Reset Progress</button>


<div className="progress-bar-fill" style={ { width : {progress}% } }></div>

  let startDate = new Date("01/31/2023");
  let endDate = new Date("01/31/2024");
  let currDate = new Date();
  let semDurationInMS = endDate.getTime() - startDate.getTime(); // in ms
  //let semDurationInDays = semDurationInMS / (24*60*60*1000);
  let durationSinceStartInMS = currDate.getTime() - startDate.getTime();
  //let durationSinceStartInDays = durationSinceStartInMS / (24*60*60*1000);
  let progressProportion = durationSinceStartInMS / semDurationInMS;

  greenBarLength = useState((durationSinceStartInMS / semDurationInMS) * 1000)  // in pixels


  <div class="bar"></div>
      <div id="greenBar" class="bar" style="width:greenBarLength;"></div>
*/