
function MyButtonEvent() {
    function handleClick() {
        alert('Button Clicked');
    }

    return(
        <button onClick={handleClick}>Click Me Event</button>
    );
}

export default MyButtonEvent;