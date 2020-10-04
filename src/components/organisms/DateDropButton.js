import React, { useContext } from 'react';
import setQueryDate from '../../utilities/functions/setQueryDate'
import Dropdown from 'react-bootstrap/Dropdown'
import QueryContext from '../../utilities/context/QueryContext';

const DateDropButton = () => {
    const queryctx = useContext(QueryContext)

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Date Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={ () => queryctx.onClick(7) }>7 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={ () => queryctx.onClick(14) }>14 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={ () => queryctx.onClick(30) }>30 Days</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={ () => queryctx.onClick(14) }>Custom</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}


export default DateDropButton;