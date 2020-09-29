import React from 'react';

import Container from 'react-bootstrap/Container';

import './App.css';

// import ClickButton from '../src/components/atoms/button/ClickButton.js';
// import Title from './components/atoms/texts/Heading1';
// import QuickStat from './components/molecules/quickStat/QuickStat';
// import QuickStatPanel from './components/organisms/quickStatPanel/QuickStatPanel';
import QuickStatTemplate from './components/templates/QuickStatTemplate';

const App = () => (
  <Container>
    <QuickStatTemplate></QuickStatTemplate>
  </Container>
);

export default App;