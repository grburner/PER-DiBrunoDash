import React, { useState } from 'react';

import UpArrow from '../../atoms/icons/UpArrow';
import DownArrow from '../../atoms/icons/DownArrow';

import Row from 'react-bootstrap/Row';

const SortToggle = () => {
    const [updown, setUpdown] = useState(true)

    return (
        <div>
            <Row onClick={() => {
                updown ? setUpdown(false) : setUpdown(true)}}>
                {updown ? <UpArrow /> : <DownArrow />}
            </Row>
        </div>
    );
};

export default SortToggle;