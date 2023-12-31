import SquareDefault from "./SquareDefault";
import {useState} from "react";

export default function Board({xIsNext, squares, onPlay}) {
    // const [xIsNext, setXIsNext] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(null));
    const winner = calculateWinner(squares);
    let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        // setSquares(nextSquares);
        // setXIsNext(!xIsNext);
        onPlay(nextSquares);
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    return (<>
        <div className="status">{status}</div>
        <div className="board-row">
            <SquareDefault value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <SquareDefault value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <SquareDefault value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
            <SquareDefault value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <SquareDefault value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <SquareDefault value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
            <SquareDefault value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <SquareDefault value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <SquareDefault value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
    </>);
}