import {Col, Modal, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

export default function RickModal({show, onHide, character}) {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Character Info
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {character && (
                    <>
                        <Row className="justify-content-center">
                            <Col><Image src={character.image} alt={character.name} roundedCircle /></Col>
                            <Col>
                                <h4>{character.name}</h4>
                                <p>Species: {character.species}</p>
                                <p>Status: {character.status}</p>
                                <p>Gender: {character.gender === "Male" ? <BsGenderMale /> : <BsGenderFemale />}</p>
                            </Col>
                        </Row>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}