import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import Alert from './components/Alert';
import About from './components/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

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
    <Router>
      <Navbar title="Notepad" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path='/' element={<TextEditor title="Enter your text" mode={mode} showAlert={showAlert}/>}/>
        <Route exact path='/about' element={<About  mode={mode}/>}/>
        <Route path='/register' element={<SignUp mode={mode}/>}/>
        <Route path='/login' element={<SignIn/>}/>
        {/* exact is used to find exact path since react uses partial matching gives error sometime */}
      </Routes>
    </Router>
  );
}

export default App;