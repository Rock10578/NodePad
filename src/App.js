import './App.css';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#090f1f'
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="Notepad" mode={mode} toggleMode={toggleMode} />
      <TextEditor title="Enter your text" mode={mode} />
    </>
  );
}

export default App;
