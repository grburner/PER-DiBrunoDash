import React, { useContext }from 'react';
import QueryContext from '../../utilities/context/QueryContext';
import ClickButton from '../atoms/button/ClickButton'
import DateDropButton from '../organisms/DateDropButton';
import DateRangeButton from '../atoms/button/DateRangeButton';

import Navbar from 'react-bootstrap/Navbar';

const DatePickerBar = () => {
    const queryctx = useContext(QueryContext)

    return (
        <div>
            <Navbar bg="light">
                <DateDropButton>Date Range</DateDropButton>
                <DateRangeButton first={queryctx.firstStart} second={queryctx.firstEnd}></DateRangeButton>
                <DateRangeButton first={queryctx.secondStart} second={queryctx.secondEnd}></DateRangeButton>
                <ClickButton>Go!</ClickButton>
            </Navbar>
        </div>
    )
}

export default DatePickerBar;