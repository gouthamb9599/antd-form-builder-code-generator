import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import Forms from './components/forms';
import DynamicForm from "./components/dynamicforms.jsx";
import { MachineProvider } from "./components/machineprovider";

function App() {
  return (
    <div className="App">
     <DynamicForm/>
    </div>
  );
}

export default App;
