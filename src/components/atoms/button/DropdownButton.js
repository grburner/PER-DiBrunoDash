import React from 'react';

import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import miliToDate from '../../../utilities/functions/miliToDate';

const DropButton = (props) => {
    const {children, onClick, variant, size} = props

    function setDates(date, e) {
        let dt = new Date()
        let range1start = dt.setDate( dt.getDate() - 1 ); // yesterday
        let range1end = dt.setDate( dt.getDate() - date) // date days ago
        let range2start = dt.setDate( dt.getDate() - (date + 1)) // date + 1 days ago
        let range2end = dt.setDate( dt.getDate() - ((date * 2) + 1 )) // date + 1 + date days ago
        console.log([miliToDate(range1start), miliToDate(range1end)])
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Date Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-2" onClick={(e) => setDates(14, e)}>14 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-1" onClick={(e) => setDates(7, e)}>7 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={(e) => setDates(30, e)}>30 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={(e) => setDates(7, e)}>Custom</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

Button.defaultProps = {
    onClick: () => {},
    variant: 'primary',
    size: '',
    disabled: false
}


export default DropButton;