import './App.css';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  }
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#090f1f'
      showAlert("Dark Mode has been Enabled","Success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled","Success");
    }
  }
  return (
    <>
      <Navbar title="Notepad" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextEditor title="Enter your text" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
