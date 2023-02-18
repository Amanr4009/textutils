import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from "react";
import Alert from './Component/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
  }
  const toggleMode =()=>{
    if (mode ==='light'){
      setmode("dark");
      document.body.style.backgroundColor ="#042743"
      showAlert("dark mode enabled", "sucess")
    }
    else{
      setmode("light");
      document.body.style.backgroundColor ="white"
      showAlert("light mode enabled", "sucess")
    }
  }
  return (
    <>
   <Navbar TitleText ='TextUtils' AboutText='About us' mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container'>
   <TextForm heading =" Enter The Text To Analyse Below" mode={mode}/>
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;

