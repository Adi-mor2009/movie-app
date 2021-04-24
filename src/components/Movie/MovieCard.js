import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <div className="c-movie">
            <Card>
                <Row className='no-gutters'>
                    <Col className="col-md-4">
                        <Card.Img variant="top" src={movie.poster} />
                    </Col>
                    <Col className="col-md-8">
                        <Card.Body>
                            <Card.Title>{movie.name}</Card.Title>
                            <Card.Text>
                                {movie.plot}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Runtime: {movie.runtime}</ListGroupItem>
                            <ListGroupItem>Director: {movie.director}</ListGroupItem>
                            <ListGroupItem>Stars: {movie.stars}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href={movie.homepage} target="_blank">{movie.name} Homepage</Card.Link>
                        </Card.Body>
                    </Col>
                </Row>    
            </Card>
        </div>
    );
}

export default MovieCard;

{/* <div className="c-movie">
             <Card>
                 <Card.Img variant="top" src={movie.poster} />
                 <Card.Body>
                     <Card.Title>{movie.name}</Card.Title>
                     <Card.Text>
                         {movie.plot}
                     </Card.Text>
                 </Card.Body>
                <ListGroup className="list-group-flush">
                     <ListGroupItem>Runtime: {movie.runtime}</ListGroupItem>
                     <ListGroupItem>Director: {movie.director}</ListGroupItem>
                     <ListGroupItem>Stars: {movie.stars}</ListGroupItem>
                 </ListGroup>
                 <Card.Body>
                     <Card.Link href={movie.homepage} target="_blank">{movie.name} Homepage</Card.Link>
                 </Card.Body>
            </Card>
        </div> */}