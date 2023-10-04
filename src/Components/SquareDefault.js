import {useState} from "react";

function SquareDefault() {
    const [value, setValue] = useState(null);

    function handleClick() {
        // console.log('clicked!');
        setValue('X');
    }

    return <button
        className="square"
        onClick={handleClick}>
        {value}
    </button>;
}

export default SquareDefault;