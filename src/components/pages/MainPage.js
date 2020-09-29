import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

// import Title from './components/atoms/texts/Heading1';
// import QuickStat from './components/molecules/quickStat/QuickStat';
// import QuickStatPanel from './components/organisms/quickStatPanel/QuickStatPanel';
import QuickStatTemplate from '../templates/QuickStatTemplate';
import NavBarTemplate from '../templates/NavBarTemplate';
import DatePickerBar from '../templates/DatePickerBar';

const MainPage = () => {
    return (
        <Container>
            <NavBarTemplate></NavBarTemplate>
            <DatePickerBar></DatePickerBar>
            <QuickStatTemplate></QuickStatTemplate>
        </Container>
    )
};

export default MainPage;