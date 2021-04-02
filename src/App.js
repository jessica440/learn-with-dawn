import logo from "./images/spiral.svg";
import "./App.css";
import Button from "./components/buttons.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Dawn is coOOooo00ooo0o0o0ol!!</p>
        <Button />
      </header>
    </div>
  );
}

export default App;
