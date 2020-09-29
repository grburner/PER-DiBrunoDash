import React from 'react';

import Heading3 from '../../atoms/texts/Heading3';
import Heading2 from '../../atoms/texts/Heading2';
import Heading4 from '../../atoms/texts/Heading4';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const QuickStat = (props) => {
    const { days } = props

    return (
        <div>
            <Row>
                <Col>
                    <Heading3 variant="secondary" type="$" days={ days }>$515.51</Heading3>
                    <Heading4 type="%" days={ days }>{`Last ${days} days`}</Heading4>
                </Col>
                <Col>
                    <Heading2>15%</Heading2>
                </Col>
            </Row>
        </div>
    );
}

export default QuickStat;