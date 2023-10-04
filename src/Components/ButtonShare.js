

function ButtonShare({count, onClick}) {
    return (
        <button onClick={onClick} className="button">
            Clicked ButtonShare {count} times
        </button>
    );
}

export default ButtonShare;