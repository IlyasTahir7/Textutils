import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been activated!", "Success");
      document.title="Textutlis-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated!", "Success");
      document.title="Textutlis-Light Mode";
    }
  };

  return (
    <>
      <Navbar title="Amazon" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='container'>
        <Form heading='Enter the text here' showAlert={showAlert} mode={mode}   />
      </div>
      <div><About/></div>
    </>
  );
}

export default App;
