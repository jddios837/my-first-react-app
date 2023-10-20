import {useEffect, useState} from "react";
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useQuery} from "@tanstack/react-query";
import SearchRickBar from "./SearchBar";
import RickModal from "./RickModal";


export default function ListOfCharacters() {
    const [filterText, setFilterText] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const {  status, error, isFetching, data } = useQuery({
        queryKey: ['characters'],
        queryFn: () => axios
            .get("https://rickandmortyapi.com/api/character")
            .then((res) => res.data)});

    const openModal = (character) => {
        setSelectedCharacter(character);
    };

    const closeModal = () => {
        setSelectedCharacter(null);
    };

    return (
        <>
            <SearchRickBar filterText={filterText} onFilterTextChange={setFilterText} />
            <Row className="justify-content-center">
                {status === 'pending' ? (
                    'Loading...'
                ) : status === 'error' ? (
                    <span>Error: {error.message}</span>
                ) : (
                    data.results.map((item) => {
                        if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) { return; }

                        return(
                            <Col md={4} lg={3} key={item.id}>
                                <Card className="mb-1">
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.species} - {item.status}
                                        </Card.Text>
                                        <Button
                                            variant="primary"
                                            onClick={() => openModal(item)}
                                        >More Info...</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                )}
            </Row>

            <RickModal
                show={selectedCharacter !== null}
                onHide={closeModal}
                character={selectedCharacter}
            />
        </>
    );
}