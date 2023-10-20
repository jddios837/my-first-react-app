import logo from './logo.svg';
import './App.css';
import './Components/Button'
import MyButton from "./Components/Button";
import ShoppingList from "./Components/ShoppingList";
import MyButtonEvent from "./Components/ButtonEvent";
import {useState} from "react";
import ButtonShare from "./Components/ButtonShare";
import Square from "./Components/Square";
import Board from "./Components/Board";
import Game from "./Components/Game";
import FilterableProductTable from "./Components/FilterableProductTable";

function App() {
    const [countApp, setCount] = useState(0);
    function handleAppClick() {
        setCount(countApp + 1);
    }

    return (
        <div className="App">
            <MyButton text="hola"/>
            {/*<MyButton text="Jose"/>*/}
            <MyButtonEvent/>
            <ShoppingList/>
            {/*<ButtonShare count={countApp} onClick={handleAppClick}/>*/}
            <ButtonShare count={countApp} onClick={handleAppClick}/>

            <h1>The TIC-TAC-TOE Game</h1>

            {/*<Square />*/}
            <br/>
            <Game />
            <br/>
            <FilterableProductTable />
        </div>
    );
}

export default App;
