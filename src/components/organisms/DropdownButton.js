import React, { useState } from 'react';

import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import miliToDate from '../../utilities/functions/miliToDate';

const DropButton = (props) => {
    const {children, onClick, variant, size} = props

    const [dates, setDates] = useState({ 
        range1s: '', 
        range1e: '', 
        range2s: '',
        range2e: ''
    });

    function setDate(date, e) {
        let dt = new Date()
        let range1start = dt.setDate( dt.getDate() - 1 ); // yesterday
        let range1end = dt.setDate( dt.getDate() - date) // date days ago
        let range2start = dt.setDate( dt.getDate() - (date + 1)) // date + 1 days ago
        let range2end = dt.setDate( dt.getDate() - ((date * 2) + 1 )) // date + 1 + date days ago
        setDates({
            range1s: range1start,
            range1e: range1end,
            range2s: range2start,
            range2e: range2end
        })
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Date Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-2" onClick={(e) => setDate(14, e)}>14 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-1" onClick={(e) => setDate(7, e)}>7 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={(e) => setDate(30, e)}>30 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={(e) => setDate(7, e)}>Custom</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}


export default DropButton;