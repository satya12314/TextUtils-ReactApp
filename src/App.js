// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
      setalert({
        message:message,
        type:type
      })
      setTimeout(()=>{
        setalert(null)
      },3000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
    <>
      {/* Component-1 */}
      {/* <Router> */}
      {/* --- 1st component */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />  
      {/* --- 2nd components */}
     <strong><Alert alert={alert}/></strong>
      {/* <Navbar/> */}
      <div className="container my-3">
        {/*  components-2 */}

        {/* <Switch> */}
          {/* <Route exact path="/about">
            <About mode={mode} />
          </Route>   */}
         
          
          {/* <Route exact path="/"> */}
          <Textform heading="TextUtils- Text Counter, Character Counter, Remove Extra Spaces" mode={mode} /> 
      
          {/* </Route> */}
        {/* </Switch> */}

        
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

