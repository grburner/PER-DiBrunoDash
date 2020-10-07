import React from 'react';

import Button from 'react-bootstrap/Button';

const DateRangeButton = (props) => {
  const { first, second } = props;

  return (
    <div>
      <Button variant="outline-info">
        { first }
        {' '}
        |
        {' '}
        { second }
      </Button>
    </div>
  );
};

export default DateRangeButton;
