import React from 'react';

import Table from 'react-bootstrap/Table'
import dummyData from '../../../dummystats/dummyproductdata';

const ProductTable = () => {

    const product = dummyData

    const renderProductRow = (element, index) => {
        return (
            <tr key={index}>
                <td>{element[0]}</td>
                <td>{element[1]}</td>
                <td>{element[2]}</td>
                <td>{element[3]}</td>
                <td>{element[4]}</td>
                <td>{element[5]}</td>
                <td>{element[6]}</td>
                <td>{element[7]}</td>
                <td>{element[8]}</td>
                <td>{element[9]}</td>
            </tr>
        )
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Units Sold</th>
                    <th>Revenue</th>
                    <th>Unit Cost</th>
                    <th>Price</th>
                    <th>Vendor</th>
                    <th>Country</th>
                    <th>Type</th>
                    <th>Style</th>
                    <th>Production</th>
                </tr>
            </thead>
            <tbody>
                {product.map(renderProductRow)}
            </tbody>
        </Table>
    )
}

export default ProductTable;