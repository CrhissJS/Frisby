import './App.css';
import GetInfo from './components/GetInfo';
import {useState} from 'react';

function App() {
  const [ info, setInfo ] = useState("historia")

  return (
    <div className="App">
      <header>
        <img src="https://frisby.com.co/img/logo-frisby.svg" alt="Frisby"></img>
      </header>
    <ul>
      <li>
        <button onClick={() => setInfo("historia")}>Historia</button>
      </li>
      <li>
        <button onClick={() => setInfo("innovacion")}><span>Innovación</span></button>
      </li>
      <li>
        <button onClick={() => setInfo("mv")}>Más</button>
      </li>
    </ul>

    <GetInfo info={info}/>
    

    

    </div>
  );
}

export default App;
