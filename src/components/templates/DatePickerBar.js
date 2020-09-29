import React, { useEffect, useState } from 'react';
import dateToQuery from '../../utilities/functions/dateQueryString';

import DateDropButton from '../organisms/DateDropButton';
import DateRangeButton from '../atoms/button/DateRangeButton';
import ClickButton from '../atoms/button/ClickButton'

import Navbar from 'react-bootstrap/Navbar';

const DatePickerBar = ({ handler, dates }) => {
    const [query, setQuery] = useState({});

    const setQueryState = (dates) => {
        let querySet = dateToQuery(dates)
        setQuery({query: querySet})
    }

    return (
        <div>
            <Navbar bg="light">
                <DateDropButton handler= { handler }>Date Range</DateDropButton>
                <DateRangeButton range1={ dates.range1s } range2={ dates.range1e }></DateRangeButton>
                <DateRangeButton range1={ dates.range2s } range2={ dates.range2e }></DateRangeButton>
                <ClickButton onClick={() => setQueryState(dates)}>Go!</ClickButton>
            </Navbar>
        </div>
    )
}

export default DatePickerBar;