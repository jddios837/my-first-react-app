import './Button.css';
import { useState } from 'react';

function MyButton({text}) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return(
        <button onClick={handleClick} className="button">
            Clicked {count} times - {text}
        </button>
    );
}

export default MyButton;