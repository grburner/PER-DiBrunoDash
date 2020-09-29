import React, { useEffect, useState } from 'react';

import DateDropButton from '../organisms/DateDropButton';
import DateRangeButton from '../atoms/button/DateRangeButton';
import ClickButton from '../atoms/button/ClickButton'

import Navbar from 'react-bootstrap/Navbar';

const DatePickerBar = ({ handler, dates }) => {


    // const [dates, setDates] = useState({ 
    //     range1s: '', 
    //     range1e: '', 
    //     range2s: '',
    //     range2e: ''
    // });

    // const handleDateSelection = dateArr => {
    //     setDates({
    //         range1s: mtd(dateArr[0]),
    //         range1e: mtd(dateArr[1]),
    //         range2s: mtd(dateArr[2]),
    //         range2e: mtd(dateArr[3])
    //     })
    // }

    const confirmClick= () => {
        console.log("Clicked!")
    }


    return (
        <div>
            <Navbar bg="light">
                <DateDropButton handler= { handler }>Date Range</DateDropButton>
                <DateRangeButton range1={ dates.range1s } range2={ dates.range1e }></DateRangeButton>
                <DateRangeButton range1={ dates.range2s } range2={ dates.range2e }></DateRangeButton>
                <ClickButton onClick={ confirmClick }>Go!</ClickButton>
            </Navbar>
        </div>
    )
}

export default DatePickerBar;