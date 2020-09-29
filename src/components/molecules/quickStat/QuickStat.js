import React from 'react';

import Heading3 from '../../atoms/texts/Heading3';
import Heading2 from '../../atoms/texts/Heading2';
import Heading4 from '../../atoms/texts/Heading4';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const QuickStat = (props) => {
    const { days, first, second, delta } = props

    return (
        <div>
            <Row>
                <Col>
                    <Heading3 variant="secondary" >${ first }</Heading3>
                    <Heading4 days={ days }>{`Last ${ days } days`}</Heading4>
                    <Heading3 variant="secondary" >${ second }</Heading3>
                    <Heading4 days={ days }>{`Last ${ days + 1 } thru ${ days * 2} days ago`}</Heading4>
                </Col>
                <Col>
                    <Heading2>{ delta }%</Heading2>
                </Col>
            </Row>
        </div>
    );
}

export default QuickStat;