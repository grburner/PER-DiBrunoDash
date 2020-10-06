import React from 'react';

import Heading3 from '../../atoms/texts/Heading3';
import Heading2 from '../../atoms/texts/Heading2';
import Heading4 from '../../atoms/texts/Heading4';
import UpArrow from '../../atoms/icons/UpArrow';
import DownArrow from '../../atoms/icons/DownArrow';
import PillButton from '../../atoms/button/PillButton';
import CurFormatter from '../../../utilities/functions/currencyFormatter';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const QuickStat = (props) => {
    const { days, first, delta } = props

    

    return (
        <div>
            <Row>
                <Col>
                    <Heading3 className="mb-0" variant="secondary">{ CurFormatter.format(first) }</Heading3>
                </Col>
                <Col>
                    <PillButton color={ delta > 0 ? "success" : "danger" }>
                        <h5 className="mt-2">{delta > 0 ? <UpArrow></UpArrow> : <DownArrow></DownArrow>}{ delta }%</h5>
                    </PillButton>
                </Col>
            </Row>
        </div>
    );
}

export default QuickStat;