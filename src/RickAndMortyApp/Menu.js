import {ListGroup} from "react-bootstrap";
import LinkNavigation from "./LinkNavigation";

export default function Menu() {
    return (
        <ListGroup>
            <ListGroup.Item>
                <LinkNavigation to="/">Home</LinkNavigation>
            </ListGroup.Item>
            <ListGroup.Item>
                <LinkNavigation to="/about">About</LinkNavigation>
            </ListGroup.Item>
        </ListGroup>
    );
}