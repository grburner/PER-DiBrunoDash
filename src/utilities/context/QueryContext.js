import React from 'react';

const QueryContext = React.createContext({
    firstStart: '',
    firstEnd: '',
    secondStart: '',
    secondEnd: '',
    selectedStore: '',
    displayDate: '',
    onClick: () => undefined,
    onStoreChange: () => undefined
});

export default QueryContext;