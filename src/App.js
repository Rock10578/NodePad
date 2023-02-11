import './App.css';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <>
      <Navbar title="Notepad"/>
      <TextEditor title="Enter your text"/>
    </>
  );
}

export default App;
