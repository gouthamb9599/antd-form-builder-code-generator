import React,{useState} from "react";
import { Button } from "antd";
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
const cryptoRandomString = require("crypto-random-string");
function CodeGenerator() {
  const [timer,openTimer]=useState(false);
  const [access,setAccess]=useState(false);
  const [verified,setVerified]=useState(false);
  const [code,setCode]=useState(null);
  const [given,setGiven]=useState('');
  const generateCode = () => {
   setCode(cryptoRandomString({ length: 6}))
   console.log(cryptoRandomString({ length: 6}));
   openTimer(true);
   setAccess(true);
  };
  const renderer = ({ minutes, seconds }) => (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
  const enablebutton=()=>{
    setAccess(false);
    openTimer(false);
  }
  const handleChange=(e)=>{
    setGiven(e.target.value);
  }
  const ReferCode=()=>{

    if(given==code){
      setVerified(true);
    }
    else{
      console.log('no')
    }
    
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
        disabled={access}
        onClick={generateCode}>Generate Code</Button>
        {timer ?
        <div> 
        {verified ?<h3>verified</h3>:
        <div>
        <Countdown date={Date.now() + 120000} renderer={renderer} onComplete={enablebutton}/>
        <input type="text" value={given} placeholder="" onChange={handleChange}/>
        <Button  style={{
          marginLeft: "50px",
          marginRight: "50px"
        }} 
        onClick={ReferCode}>Verify</Button></div>} 
        </div>:<></>}
    </div>
  );
}
export default CodeGenerator;

