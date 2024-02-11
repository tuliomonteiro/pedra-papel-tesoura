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
  const [result, setResult] = useState("");

  function setOption(e) {
    setUserOption(e.target.value);
  }

  function OnResetHanlder() {
    setResult("");
  }

  function onResultHandle(e) {
    const possibilities = ["pedra", "papel", "tesoura"];
    let shuffled = Math.floor(Math.random() * 3);
    if (possibilities[shuffled] === userOption) {
      setResult("Empate, jogue de novo");
    } else if (
      possibilities[shuffled] === "tesoura" &&
      userOption === "papel"
    ) {
      setResult(
        `o computador escolheu ${possibilities[shuffled]} e o usuario escolheu ${userOption}, portanto o computador ganhou.`
      );
    } else if (
      possibilities[shuffled] === "papel" &&
      userOption === "tesoura"
    ) {
      setResult(
        `O usuario ganhou pois escolheu ${userOption} e o computador ${possibilities[shuffled]}`
      );
    }
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
      <button onClick={OnResetHanlder}>Resetar</button>
      <button onClick={onResultHandle}>Resultado</button>
      <div>
        <p>{result}</p>
      </div>
    </div>
  );
}
