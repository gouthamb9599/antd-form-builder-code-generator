import React from "react";
import { Button } from "antd";
const cryptoRandomString = require("crypto-random-string");
import Timer from 'react-timer-wrapper';



function CodeGenerator(props) {
  const [timer,openTimer]=useState(false);
  const generateCode = () => {
   console.log(cryptoRandomString({ length: 6}))
   openTimer(!timer);
  };
  const onTimerStart=({duration, progress, time})=> {

  }

  const onTimerStop=({duration, progress, time})=> {

  }

  const onTimerTimeUpdate=({duration, progress, time})=> {

  }

  const onTimerFinish=({duration, progress, time})=> {

  }
  return (
    <div style={{ borderStyle: "dashed",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
    paddingBottom: "20px"}}>
      <p>
        Please Click on generate code button to recieve it from the customer and
        enter the code to change the subscriber number
      </p>
      <Button  style={{
          marginLeft: "50px",
          marginRight: "50px"
        }}
        onClick={generateCode}>Generate Code</Button>
        {timer ?<div> 
          <Timer
        active={timer}
        time={20000}
        onFinish={this.onTimerFinish}
        onStart={this.onTimerStart}
        onStop={this.onTimerStop}
        onTimeUpdate={this.onTimerTimeUpdate}
      /></div>:<></>}
    </div>
  );
}
export default CodeGenerator;

