import {useEffect, useState} from "react";
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ListOfCharacters() {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setDataList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Row className="justify-content-center">
            {dataList.results?.map((data) => (
                <Col md={4} lg={3} key={data.id}>
                    <Card className="mb-1">
                        <Card.Img variant="top" src={data.image} />
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.species} - {data.status}
                            </Card.Text>
                            <Button variant="primary">More Info...</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}