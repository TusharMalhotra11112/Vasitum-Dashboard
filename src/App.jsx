import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [drop,setDrop] = useState(true)
  return (
    <div className="App">
      <Sidebar drop={drop} setDrop={setDrop}/>
      <Main drop={drop} setDrop={setDrop}/>
    </div>
  );
}

export default App;
