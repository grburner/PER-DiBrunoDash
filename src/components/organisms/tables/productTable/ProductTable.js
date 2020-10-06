import React, { useState } from 'react';
import './productTable.css';

import Table from 'react-bootstrap/Table'
import dummyData from '../../../../dummystats/dummyproductdata';
import arrToObj from '../../../../utilities/functions/arrayToObj';

const ProductTable = () => {
    const [sortedField, setSortedField] = useState(null);
    const product = arrToObj(dummyData)

    const renderProductRow = (element, index) => {
        return (
            <tr key={index}>
                <td>{element.product_name}</td>
                <td>{element.units_sold}</td>
                <td>{element.revenue}</td>
                <td>{element.unit_cost}</td>
                <td>{element.price}</td>
                <td>{element.vendor}</td>
                <td>{element.country}</td>
                <td>{element.type}</td>
                <td>{element.style}</td>
                <td>{element.production}</td>
            </tr>
        )
    }

    return (
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
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
        </div>
    )
}

export default ProductTable;