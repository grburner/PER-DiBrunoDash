import React, { useEffect, useState } from 'react';

import DropButton from '../atoms/button/DropdownButton';

import Navbar from 'react-bootstrap/Navbar';

const DatePickerBar = (props) => {

    return (
        <div>
            <Navbar bg="light">
                <DropButton>Date Range</DropButton>
            </Navbar>
        </div>
    )
}

export default DatePickerBar;