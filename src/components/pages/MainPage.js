import React from 'react';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import QuickStatTemplate from '../templates/QuickStatTemplate';
import NavBarTemplate from '../templates/NavBarTemplate';
import DatePickerBar from '../templates/DatePickerBar';
import SalesChart from '../organisms/charts/SalesChart';
import GoalsChart from '../organisms/charts/GoalsChart';
import MarginChart from '../organisms/charts/MarginContChart';
import FastSlow from '../organisms/charts/FastSlowChart';
import ProductTable from '../organisms/tables/productTable/ProductTable';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const MainPage = () => {

    return (
        <Container>
            <NavBarTemplate />
            <QuickStatTemplate />
            <Row>
                <Col>
                    <ProductTable />
                </Col>
                {/* <Col>
                    <GoalsChart />
                </Col> */}
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