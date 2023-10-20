
export default function SearchRickBar({filterText, onFilterTextChange}) {
    return (
        <form className="mb-3">
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)}/>
            <br/>
        </form>
    );
}