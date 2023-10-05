import {useState} from "react";

function SquareDefault({value, onSquareClick}) {
    //const [value, setValue] = useState(null);

    //function handleClick() {
        // console.log('clicked!');
        //setValue('X');
    //}

    return <button
        className="square"
        onClick={onSquareClick}>
        {value}
    </button>;
}

export default SquareDefault;