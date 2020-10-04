import React from 'react';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import QuickStatTemplate from '../templates/QuickStatTemplate';
import NavBarTemplate from '../templates/NavBarTemplate';
import DatePickerBar from '../templates/DatePickerBar';
import SalesChart from '../templates/SalesChart';
import GoalsChart from '../templates/GoalsChart';
import MarginChart from '../templates/MarginContChart';
import FastSlow from '../templates/FastSlowChart';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const MainPage = () => {

    return (
        <Container>
            <NavBarTemplate />
            <DatePickerBar />
            <QuickStatTemplate />
            <Row>
                <Col>
                    <SalesChart />
                </Col>
                <Col>
                    <GoalsChart />
                </Col>
            </Row>
            <Row>
                <Col>
                    <MarginChart />
                </Col>
                <Col>
                    <FastSlow />
                </Col>
            </Row>
        </Container>
    )
};

export default MainPage;