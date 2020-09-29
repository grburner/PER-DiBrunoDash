import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class DashNav extends Component {
    render () {
        return (
            <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">DiBruno Bottleshop Dash</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" className="justify-content-end">Sande Friedman | Manager</Nav.Link>
            </Nav.Item>
            </Nav>
        )
    };
}

export default DashNav;