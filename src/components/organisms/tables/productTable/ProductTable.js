// import React, { useState, useMemo } from 'react';
// import './productTable.css';

// import Table from 'react-bootstrap/Table'
// import dummyData from '../../../../dummystats/dummyproductdata';
// import arrToObj from '../../../../utilities/functions/arrayToObj';

// const productData = arrToObj(dummyData).products;

// const useSortableData = (products, config = null) => {
//     console.log('into sort hook')
//     const [sortConfig, setSortConfig] = useState(config);

//     const sortedItems = useMemo(() => {
//         let sortableItems = [...products];
//         if (sortConfig !== null) {
//             sortableItems.sort((a, b) => {
//                 if (a[sortConfig.key] < b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? -1 : 1;
//                 }
//                 if (a[sortConfig.key] > b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? 1 : -1;
//                 }
//                 return 0
//             });
//         }
//         return sortableItems;
//     }, [products, sortConfig]);

//     const requestSort = (key) => {
//         let direction = 'ascending';
//         if (
//             sortConfig &&
//             sortConfig.key === key &&
//             sortConfig.direction === 'ascending'
//         ) {
//             direction = 'descending';
//         }
//         setSortConfig({ key, direction });
//     };

//     return { products: sortedItems, requestSort, sortConfig };
// };

// const ProductTable = () => {
//     const { productData, requestSort, sortConfig } = useSortableData(productData)
//     const getClassNamesFor = (name) => {
//         if (!sortConfig) {
//             return;
//         }
//         return sortConfig.key === name ? sortConfig.direction : undefined;
//     };

//     const renderProductRow = (element, index) => {
//         return (
//             <tr key={index}>
//                 <td>{element.product_name}</td>
//                 <td>{element.units_sold}</td>
//                 <td>{element.revenue}</td>
//                 <td>{element.unit_cost}</td>
//                 <td>{element.price}</td>
//                 <td>{element.vendor}</td>
//                 <td>{element.country}</td>
//                 <td>{element.type}</td>
//                 <td>{element.style}</td>
//                 <td>{element.production}</td>
//             </tr>
//         )
//     }

//     return (
//         <div className="table-wrapper-scroll-y my-custom-scrollbar">
//             <Table striped bordered hover size="sm">
//                 <thead>
//                     <tr>
//                         <th>
//                             <button 
//                             type="button" 
//                             onClick={() => requestSort('product_name')}
//                             className={getClassNamesFor('product_name')}
//                             >
//                             Product
//                             </button>
//                         </th>
//                         <th>
//                             <button 
//                                 type="button" 
//                                 onClick={() => requestSort('units_sold')}
//                                 className={getClassNamesFor('units_sold')}
//                                 >
//                                 Units Sold
//                             </button>
//                         </th>
//                         <th>
//                         <button 
//                                 type="button" 
//                                 onClick={() => requestSort('revenue')}
//                                 className={getClassNamesFor('revenue')}
//                                 >
//                                 Revenue
//                             </button>
//                         </th>
//                         <th>Unit Cost</th>
//                         <th>Price</th>
//                         <th>Vendor</th>
//                         <th>Country</th>
//                         <th>Type</th>
//                         <th>Style</th>
//                         <th>Production</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {productData.map(renderProductRow)}
//                 </tbody>
//             </Table>
//         </div>
//     )
// }

// export default ProductTable;

import React, { useState } from 'react';
import './productTable.css';

import Table from 'react-bootstrap/Table'
import dummyData from '../../../../dummystats/dummyproductdata';
import arrToObj from '../../../../utilities/functions/arrayToObj';

const ProductTable = () => {
    const [sortedField, setSortedField] = useState(null);
    const product = arrToObj(dummyData).products

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