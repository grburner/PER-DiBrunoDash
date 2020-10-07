import React from 'react';

import Button from 'react-bootstrap/Button';

const ClickButton = (props) => {
  const {
    children, onClick, variant, size,
  } = props;

  return (
    <Button onClick={onClick} variant={variant} size={size}>
      {children}
    </Button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  variant: 'primary',
  size: '',
  disabled: false,
};

export default ClickButton;
