import Menu from "./Menu";
import {Col, Row} from "react-bootstrap";
import ListOfCharacters from "./ListOfCharacters";
import {Outlet} from "react-router-dom";

export default function RickAndMortyLayout() {
    return (
        <>
            <Row>
                <h1>Rick And Morty App</h1>
            </Row>
            <Row>
                <Col sm={4}>
                    <Menu />
                </Col>
                <Col sm={8}>
                    <Outlet />
                </Col>
            </Row>
        </>
    );
}