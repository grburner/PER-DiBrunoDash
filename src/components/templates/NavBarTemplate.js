import React from 'react';

import MenuDropDown from '../atoms/button/MenuDropDown';
import DropDownButton from '../atoms/button/DropDownButton';
import DateDropButton from '../organisms/DateDropButton';

import Navbar from 'react-bootstrap/Navbar';

const NavBarTemplate = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <MenuDropDown />
                <Navbar.Brand className="ml-3" href="#home">BottleShop Dash</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <DropDownButton></DropDownButton>
                    <DateDropButton>Date Range</DateDropButton>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBarTemplate;