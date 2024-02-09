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
    setUserOption(e.target.value);
  }

  function onResultHandle(e) {
    const possibilities = ["pedra", "papel", "tesoura"];
    let shuffled = possibilities
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    // console.log(shuffled);
    if (shuffled[0] === userOption) {
      console.log(
        `Ocorreu um empate o computador escolheu${shuffled[0]} e o usuario ${userOption}`
      );
    } else if (shuffled[0] === "tesoura" && userOption === "papel") {
      console.log(
        `o computador escolheu${shuffled[0]} e o usuario escolheu ${userOption}, portanto o computador ganhou`
      );
    } else if (shuffled[0] === "papel" && userOption === "tesoura") {
      console.log(
        `O usuario ganhou pois escolheu ${userOption} e o computador ${shuffled[0]}`
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
      <button onClick={onResultHandle}>Resultado</button>
    </div>
  );
}
