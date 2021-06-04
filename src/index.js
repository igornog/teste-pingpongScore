import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Home from "./components/templates/Home";
import counterPlayer1 from "./reducers/player1";
import counterPlayer2 from "./reducers/player2";
import "./App.css";

const storePlayer1 = createStore(counterPlayer1);
const storePlayer2 = createStore(counterPlayer2);

const App = () =>
  ReactDOM.render(
    <Home
      valuePlayer1={storePlayer1.getState()}
      onIncrementPlayer1={() => storePlayer1.dispatch({ type: "INCREMENT" })}
      onDecrementPlayer1={() => storePlayer1.dispatch({ type: "DECREMENT" })}
      valuePlayer2={storePlayer2.getState()}
      onIncrementPlayer2={() => storePlayer2.dispatch({ type: "INCREMENT" })}
      onDecrementPlayer2={() => storePlayer2.dispatch({ type: "DECREMENT" })}
    />,
    document.getElementById("root")
  );

App();
storePlayer1.subscribe(App);
storePlayer2.subscribe(App);

export default App