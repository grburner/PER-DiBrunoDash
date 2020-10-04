import React from 'react';

const QueryContext = React.createContext({
    firstStart: '',
    firstEnd: '',
    secondStart: '',
    secondEnd: '',
    onClick: () => undefined
});

export default QueryContext;