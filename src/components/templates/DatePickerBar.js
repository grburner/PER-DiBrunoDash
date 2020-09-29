import React, { useEffect, useState } from 'react';

import DropButton from '../organisms/DropdownButton';
import DateRangeButton from '../atoms/button/DateRangeButton';

import Navbar from 'react-bootstrap/Navbar';

const DatePickerBar = (props) => {
    

    return (
        <div>
            <Navbar bg="light">
                <DropButton>Date Range</DropButton>
                <DateRangeButton></DateRangeButton>
                <DateRangeButton></DateRangeButton>
            </Navbar>
        </div>
    )
}

export default DatePickerBar;