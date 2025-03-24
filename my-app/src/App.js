import React, { Component, use, useState }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  // Red mode
  const [redMode, setRedMode] = useState('light');
  //alerts
  const [alert, setAlert] = useState(null);
  
  const showAlert = (msg, type) => {
    setAlert({
      message : msg,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  //toggle red
  const toggleRed = () =>{
    if(redMode === 'light'){
      setRedMode('red');
      document.body.style.backgroundColor = 'red';
      showAlert('Red mode has been enabled' , 'success');
      document.title = 'TextUtlis - Red mode';
    }
    else {
      setRedMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtlis';

    }
  }


  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtlis - Dark mode';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtlis ';

    }
  }
  {
    return (
      <>
    <Router>
     <Navbar title="TextUtils" aboutText = "About" mode = {mode} toggle = {toggle} toggleRed = {toggleRed}/>
     <Alert alert={alert}/>
     <div className="container">
      <Routes>
        <Route path="/about"
            element = {<About/>}  
        />
        <Route path="/"
          element = {<TextForm heading="Enter Your Text To Analyze"/>}
        />
        </Routes>
     </div>
    </Router>
      {/* <About title="TextUtils" aboutText = "About"/>   */}
     </>
    );
  }
}

export default App;
