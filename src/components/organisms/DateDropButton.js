import React, { useContext } from 'react';
import setQueryDate from '../../utilities/functions/setQueryDate'
import Dropdown from 'react-bootstrap/Dropdown'
import QueryContext from '../../utilities/context/QueryContext';

const DateDropButton = () => {
    const queryctx = useContext(QueryContext)

    const dateBtnClick = (days, display) => {
        queryctx.onClick(days)
        queryctx.onDateChange(display)
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-info" id="dropdown-basic" className="ml-2">
                {queryctx.displayDate}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={ () => dateBtnClick(7, "7 Days") }>7 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={ () => dateBtnClick(14, "14 Days") }>14 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={ () => dateBtnClick(30, "30 Days") }>30 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={ () => dateBtnClick(7, "7 Days") }>Custom</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}


export default DateDropButton;