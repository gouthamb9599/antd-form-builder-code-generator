import React from "react";
import { Button } from "antd";

function CodeGenerator(props) {
  return (
    <div style={{ borderStyle: "dashed" }}>
      <p>
        Please Click On generate code button to recieve it from the customer and
        enter the code to change the subscriber number
      </p>
      <Button>Generate Code</Button>
    </div>
  );
}
export default CodeGenerator;