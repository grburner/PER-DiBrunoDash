import React, { useEffect, useState } from 'react';

import MenuDropDown from '../atoms/button/MenuDropDown';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

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