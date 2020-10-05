import React, { useContext } from 'react';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import QueryContext from '../../../utilities/context/QueryContext';

const DropDownButton = () => {
    const queryctx = useContext(QueryContext)

    return (
        <DropdownButton id="dropdown-basic-button" title={queryctx.selectedStore} variant="outline-info">
            <Dropdown.Item href="#/action-1" onClick={() => {queryctx.onStoreChange("Total Department")}}>Total Department</Dropdown.Item>
            <Dropdown.Item href="#/action-1" onClick={() => {queryctx.onStoreChange("Rittenhouse")}}>Rittenhouse</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={() => {queryctx.onStoreChange("Franklin")}}>Franklin</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={() => {queryctx.onStoreChange("9th Street")}}>9th Street</Dropdown.Item>
        </DropdownButton>
    )
}

export default DropDownButton;