//import logo from './logo.svg
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled","success");
      document.title='textarea-dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      document.title='textarea-light mode';
    }
  }
      return (
        <>
              {/*} <Navbar title="textarea2" about="about us" mode={mode} toggleMode={toggleMode}/>*/}
              {/*<Navbar/>*/} 
             <Router>
             <Navbar title="textarea2" mode={mode} toggleMode={toggleMode}/>
              <Alert alert={alert}/>
              <div  className="container my-3"> 
              {/*<TextForm heading="Enter your text to be analyze" showAlert={showAlert} mode={mode}/>*/}
              <Switch>
                <Route exact path="/about">
                  <About mode={mode} />
                </Route>
                <Route exact path="/">
                <TextForm heading="Try textarea -Word counter , Character counter ,Remove extra spaces" showAlert={showAlert} mode={mode}/>
                </Route>
             </Switch>
              {/*<About/>*/}
             </div>
            </Router>
        </>
    );
}

export default App;
