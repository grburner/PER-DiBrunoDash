import React from 'react';

const Heading3 = (props) => {
    const {children } = props

    return (
        <h3 className="pt-2">{children}</h3>
    )
}

export default Heading3;