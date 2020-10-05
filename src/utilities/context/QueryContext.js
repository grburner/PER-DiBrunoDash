import React from 'react';

const QueryContext = React.createContext({
    firstStart: '',
    firstEnd: '',
    secondStart: '',
    secondEnd: '',
    selectedStore: '',
    onClick: () => undefined,
    onStoreChange: () => undefined
});

export default QueryContext;