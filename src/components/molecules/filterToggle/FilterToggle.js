import React, { useState } from 'react';

import FullFilter from '../../atoms/icons/FullFilter';
import EmptyFilter from '../../atoms/icons/EmptyFilter';

import Row from 'react-bootstrap/Row';

const FilterToggle = () => {
    const [filterOn, setFilterOn] = useState(false)

    return (
        <div>
            <Row onClick={() => {
                filterOn ? setFilterOn(false) : setFilterOn(true)}}>
                {filterOn ? <FullFilter /> : <EmptyFilter />}
            </Row>
        </div>
    );
};

export default FilterToggle;