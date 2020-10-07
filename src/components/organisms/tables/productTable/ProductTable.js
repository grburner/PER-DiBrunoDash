import React from 'react';
import './productTable.css';
import dummyData from '../../../../dummystats/dummyproductdata';
import arrToObj from '../../../../utilities/functions/arrayToObj';
import Table from 'react-bootstrap/Table'
import useSortableData from '../../../../utilities/hooks/useSortableData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterToggle from '../../../molecules/filterToggle/FilterToggle';
import SortToggle from '../../../molecules/sortToggle/SortToggle';
import TableHeader from './tableHeader/TableHeader';

const ProductTable = (props) => {
  console.log(dummyData)
  
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
          {dummyData[0].map((cell, index)=> (
            <TableHeader key={index}>
            <span>{cell}</span>
            </TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {prods.slice(1).map(renderProductRow)}
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




{/* <th>
<Row className="d-flex flex-row">
    <Col>
      <p>
      Product
      </p>
    </Col>
    <Col>
      <Row
        onClick={() => requestSort('product_name')}
        className={getClassNamesFor('product_name')}
      >
        <SortToggle />
      </Row>
      <Row
      >
        <FilterToggle />
      </Row>
    </Col>
</Row>
</th> */}