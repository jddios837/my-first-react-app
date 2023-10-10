import {Link} from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Home() {
    // const history = useHistory();
    // function handleClick(path) {
    //     history.push(path);
    // }

    return (
        <div>
            <h1>Home</h1>
            <Link to="/about">About Page Link</Link>
            {/*<Button onClick={() => handleClick("about")} variant="primary">About Page Link</Button>{' '}*/}
        </div>
    );
}