import React from 'react';

const Heading2 = (props) => {
    const { children } = props

    return (
        <h2 className="align-baseline">{children}</h2>
    )
}

export default Heading2;