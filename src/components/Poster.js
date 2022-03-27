import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Poster = ({name, overview, id, poster}) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster}`} />
                <Card.Body>
                    <Card.Title>{name.slice(0, 20)}</Card.Title>
                    <Card.Text>
                        {overview.slice(0, 30)}
                    </Card.Text>
                    <Link to={`/${id}`}>
                        <Button variant="primary">자세히 보기</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Poster;