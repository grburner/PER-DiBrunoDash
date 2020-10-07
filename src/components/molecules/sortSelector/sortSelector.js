import React, { useState }from 'react';

import UpArrow from '../../atoms/icons/UpArrow';
import DownArrow from '../../atoms/icons/DownArrow';
import Filter from '../../atoms/icons/Filter';

import Row from 'react-bootstrap/Row';

const SortSelector = () => {
    const [updown, setUpdown] = useState("true")
    const [filterSelect, setFilterSelect] = useState("false")

    return (
        <div>
            <Row>
                <Filter />
            </Row>
            <Row onClick={() => {updown ? setUpdown("false") : setUpdown("true")}}>
                {updown ? <UpArrow /> : <DownArrow />}
            </Row>
        </div>
    );
};

export default SortSelector;