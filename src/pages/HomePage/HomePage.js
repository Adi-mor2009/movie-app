import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage(props) {
    return (
        <div className="p-home">
            <Container>
                <h1 className="display-1">Movies App</h1>
                {/* <Button href="#/cars">Enter</Button> */}
                {/* <div>
                    <Link className="btn btn-primary" to="/actors">Press here inorder to see amazing actors!</Link>
                </div>
                <div>
                    <Link className="btn btn-primary" to="/movies">Press here inorder to see amazing movies!</Link>
                </div> */}
            </Container>
        </div>
    );
}

export default HomePage;