import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import MyComponent1 from "./components/LoginForm";

function App() {
  return (
    <BrowserRouter basename="/my-project">
      <div className="App">
        <h1>SINGLE CYLINDER SOLENOID ENGINE</h1>
        <MyComponent1 />
      </div>
    </BrowserRouter>
  );
}

export default App;