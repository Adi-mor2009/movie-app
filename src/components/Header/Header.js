import React from 'react';
import { Col, Form } from 'react-bootstrap';
import './Header.css'
// import { Form, Row, Col } from 'react-bootstrap';
function Header({filterTextChange, sortByChange, sortOptions}) {
    const sortByOptions = sortOptions.map(sortBy => <option key={`item${sortBy}`} value={sortBy}>{sortBy}</option>);
    return (
        <div>
            <Form  id="header_form">
                <Form.Row>
                    <Col className="col-md-6 col-12">
                        <Form.Control type="text" onChange={(e) => filterTextChange(e.target.value)} placeholder="Filter by first and last name" />
                    </Col>
                    <Col className="col-md-6 col-12">
                        <Form.Control as="select" onChange={(e) => sortByChange(e.target.value)}>
                            {sortByOptions}
                        </Form.Control>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default Header;