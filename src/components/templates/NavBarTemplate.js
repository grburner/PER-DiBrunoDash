import React, { useEffect, useState } from 'react';

import MenuDropDown from '../atoms/button/MenuDropDown';
import ClickButton from '../atoms/button/ClickButton';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBarTemplate = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <MenuDropDown />
                <Navbar.Brand className="ml-3" href="#home">BottleShop Dash</Navbar.Brand>
                <Button className="justify-content-end" variant="light">User Name</Button>
            </Navbar>
        </div>
    )
}

export default NavBarTemplate;