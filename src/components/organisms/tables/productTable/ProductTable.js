import React from 'react';
import './productTable.css';
import dummyData from '../../../../dummystats/dummyproductdata';
import arrToObj from '../../../../utilities/functions/arrayToObj';
import Table from 'react-bootstrap/Table'
import useSortableData from '../../../../utilities/hooks/useSortableData';
import sortSelector from '../../../molecules/sortSelector/sortSelector';
import SortSelector from '../../../molecules/sortSelector/sortSelector';

const ProductTable = (props) => {
  
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

  const { prods, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <Table striped bordered hover size="sm">
      <caption>Products</caption>
      <thead>
        <tr>
          <th>
          <div className="d-inline">
            <button
                type="button"
                onClick={() => requestSort('product_name')}
                className={getClassNamesFor('product_name')}
              >
              Product
              <SortSelector className="pull-right"/>
            </button>
          </div>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('units_sold')}
              className={getClassNamesFor('units_sold')}
            >
              Units Sold
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('revenue')}
              className={getClassNamesFor('revenue')}
            >
              Revenue
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('unit_cost')}
              className={getClassNamesFor('unit_cost')}
            >
              Unit Cost
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('price')}
              className={getClassNamesFor('price')}
            >
              Price
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('vendor')}
              className={getClassNamesFor('vendor')}
            >
              Vendor
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('country')}
              className={getClassNamesFor('country')}
            >
              Country
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('type')}
              className={getClassNamesFor('type')}
            >
              Type
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('style')}
              className={getClassNamesFor('style')}
            >
              Style
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('production')}
              className={getClassNamesFor('production')}
            >
              Production
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {prods.map(renderProductRow)}
    </tbody>
    </Table>
  );
};

export default function App() {

  return (
    <div className="App table-wrapper-scroll-y my-custom-scrollbar">
      <ProductTable
        products={arrToObj(dummyData).products}
      />
    </div>
  );
}
