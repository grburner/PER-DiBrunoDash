import React from 'react';

import Button from 'react-bootstrap/Button';

const DateRangeButton = (props) => {
const {range1, range2} = props

    return(
        <div>
            <Button variant="outline-info">{ range1 }</Button>
            <Button variant="outline-info">{ range2 }</Button>
        </div>
    )
}

export default DateRangeButton;