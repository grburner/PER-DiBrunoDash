import React, { useState, useMemo } from 'react';

const useSortableData = (prods, config = null) => {
    const [sorts, setSortConfig] = useState(config);
  
    const sortedItems = useMemo(() => {
      let sortList = [...prods];
      if (sorts !== null) {
        sortList.sort((a, b) => {
          if (a[sorts.key] < b[sorts.key]) {
            return sorts.order === 'ascending' ? -1 : 1;
          }
          if (a[sorts.key] > b[sorts.key]) {
            return sorts.order === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortList;
    }, [prods, sorts]);
  
    const requestSort = (key) => {
      let order = 'ascending';
      if (sorts && sorts.key === key && sorts.order === 'ascending') {
        order = 'descending';
      }
      setSortConfig({ key, order });
    };
  
    return { prods: sortedItems, requestSort, sorts };
  };

  export default useSortableData;