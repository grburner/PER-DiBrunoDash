import React, { useEffect, useState } from 'react';

import mtd from '../../utilities/functions/miliToDate';

import DateDropButton from '../organisms/DateDropButton';
import DateRangeButton from '../atoms/button/DateRangeButton';

import Navbar from 'react-bootstrap/Navbar';

const DatePickerBar = (props) => {
    const [dates, setDates] = useState({ 
        range1s: '', 
        range1e: '', 
        range2s: '',
        range2e: ''
    });

    const handleDateSelection = dateArr => {
        setDates({
            range1s: mtd(dateArr[0]),
            range1e: mtd(dateArr[1]),
            range2s: mtd(dateArr[2]),
            range2e: mtd(dateArr[3])
        })
    }


    return (
        <div>
            <Navbar bg="light">
                <DateDropButton handleDateSelection= { handleDateSelection }>Date Range</DateDropButton>
                <DateRangeButton range1={ dates.range1s } range2={ dates.range1e }></DateRangeButton>
                <DateRangeButton range1={ dates.range2s } range2= { dates.range2e }></DateRangeButton>
            </Navbar>
        </div>
    )
}

export default DatePickerBar;