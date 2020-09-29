import React from 'react';

import QuickStat from '../../components/molecules/quickStat/QuickStat';
import Card from 'react-bootstrap/Card'

const QuickStatPanel = (props) => {
    const { header, days, first, second, delta } = props

    return (
        <Card border="light">
            <Card.Header>{ header }</Card.Header>
            <Card.Body>
                <QuickStat days={ days } first={ first } second={ second } delta={ delta }></QuickStat>
            </Card.Body>
        </Card>
    )
}

export default QuickStatPanel;