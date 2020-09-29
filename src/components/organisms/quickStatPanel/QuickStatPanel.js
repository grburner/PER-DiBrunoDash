import React from 'react';

import QuickStat from '../../molecules/quickStat/QuickStat';
import Card from 'react-bootstrap/Card'

const QuickStatPanel = (props) => {
    const { header, days } = props

    return (
        <Card border="light">
            <Card.Header>{ header }</Card.Header>
            <Card.Body>
                <QuickStat days={ days }></QuickStat>
            </Card.Body>
        </Card>
    )
}

export default QuickStatPanel;