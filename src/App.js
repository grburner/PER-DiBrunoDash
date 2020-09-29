import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import './App.css';

import ClickButton from '../src/components/atoms/button/ClickButton.js';
// import Title from './components/atoms/texts/Heading1';
// import QuickStat from './components/molecules/quickStat/QuickStat';
// import QuickStatPanel from './components/organisms/quickStatPanel/QuickStatPanel';
import QuickStatTemplate from './components/templates/QuickStatTemplate';
import NavBarTemplate from './components/templates/NavBarTemplate';
import DatePickerBar from './components/templates/DatePickerBar';

const App = () => (
  <Container>
    <NavBarTemplate></NavBarTemplate>
    <DatePickerBar></DatePickerBar>
    <QuickStatTemplate></QuickStatTemplate>
    <ClickButton></ClickButton>
  </Container>
);

export default App;