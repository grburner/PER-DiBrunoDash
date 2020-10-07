import React from 'react';

const TableHeader = (props) => {
    const { children } = props

    return (
        <th>
            {children}
        </th>
    )
};

export default TableHeader;