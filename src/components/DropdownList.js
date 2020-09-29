import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown'

class DropdownList extends Component {

    render() {

        const {
            dropDownItems
        } = this.props;

        let dropdownitems = dropDownItems.map(item => {
            return <Dropdown.Item href="#" key={item.toString()}>{ item }</Dropdown.Item>
        });

        

        return (
            <Dropdown.Menu>
                {dropdownitems}
            </Dropdown.Menu>
        )
    }
}

export default DropdownList;