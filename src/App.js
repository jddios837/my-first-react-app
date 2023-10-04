import logo from './logo.svg';
import './App.css';
import './Components/Button'
import MyButton from "./Components/Button";
import ShoppingList from "./Components/ShoppingList";
import MyButtonEvent from "./Components/ButtonEvent";

function App() {
  return (
    <div className="App">
      <MyButton text="hola" />
      <MyButtonEvent />
      <ShoppingList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
