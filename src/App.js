//import logo from './logo.svg
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState} from 'react';
import Alert from './components/Alert';


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
      document.body.style.backgroundColor = 'black';
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
          <Navbar title="textarea2" mode={mode} toggleMode={toggleMode}/>
            {/* <Navbar/>*/}
            <Alert alert={alert}/>
            <div  className="container my-3">  
            {/*<About/>*/}
            <TextForm heading="Enter your text to be analyze" showAlert={showAlert} mode={mode}/>
            </div>
        </>
    );
}

export default App;
