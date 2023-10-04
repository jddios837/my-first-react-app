import SquareDefault from "./SquareDefault";

export default function Board() {
    return (<>
        <div className="board-row">
            <SquareDefault />
            <SquareDefault />
            <SquareDefault />
        </div>
        <div className="board-row">
            <SquareDefault />
            <SquareDefault />
            <SquareDefault />
        </div>
        <div className="board-row">
            <SquareDefault />
            <SquareDefault />
            <SquareDefault />
        </div>
    </>);
}