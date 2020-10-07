import React from "react";
import CodeGenerator from '../components/codeGenerator';
let config={}
config.forms={
    "columns": 1,
    "fields": [
      {
        "key": "Network",
        "label": "Select Network",
        "required": true,
        "tooltip": "Select Network",
        "message": "Network is required"
      },
      {
        "key": "Zip_Code",
        "label": "Select Available Zip Code",
        "required": true,
        "tooltip": "Select Available Zip Code",
        "message": " Zip Code is required"
      },
      {
        "key": "Activity_Fee",
        "label": "Activity Fee",
        "required": true,
        "tooltip": "Activity Fee"
      },
      {
        "key":"code Generator",
        "widget":CodeGenerator,

      }
    ]
  }
  export default config;
  