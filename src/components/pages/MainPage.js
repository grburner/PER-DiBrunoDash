import React, { useState } from 'react';
import QueryContext from '../../utilities/context/QueryContext';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import QuickStatTemplate from '../templates/QuickStatTemplate';
import NavBarTemplate from '../templates/NavBarTemplate';
import DatePickerBar from '../templates/DatePickerBar';

const MainPage = () => {

    return (
        <Container>
            <NavBarTemplate />
            <DatePickerBar />
            <QuickStatTemplate />
        </Container>
    )
};

export default MainPage;