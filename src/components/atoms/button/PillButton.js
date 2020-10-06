import React from 'react';

import Badge from 'react-bootstrap/Badge'


const PillButton = (props) => {
    const { children, color } = props

    return (
        <Badge pill variant={color}>
            {children}
        </Badge>
    )
}

export default PillButton;