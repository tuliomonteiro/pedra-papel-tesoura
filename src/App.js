import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;

function Score() {}

function Game() {
  const [userOption, setUserOption] = useState("");

  function setOption(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <button value="pedra" onClick={setOption}>
        Pedra
      </button>
      <button value="papel" onClick={setOption}>
        Papel
      </button>
      <button value="tesoura" onClick={setOption}>
        Tesoura
      </button>
    </div>
  );
}
