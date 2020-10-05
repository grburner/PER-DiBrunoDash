import React, { useState } from 'react';
import MainPage from './components/pages/MainPage';
import QueryContext from './utilities/context/QueryContext';
import setQueryDate from './utilities/functions/setQueryDate';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  
  const [queryState, setQueryState] = useState({
    firstStart: 'aaa',
    firstEnd: 'second',
    secondStart: 'third',
    secondEnd: 'fourth',
    selectedStore: 'Select Store',
    displayDate: 'Select Date',
    onClick: (period) => {
      changeDates(period)
    },
    onStoreChange: (store) => {
      setQueryState(prevQuery => {
        return {
          ...prevQuery,
          selectedStore: store
        }
      })
    },
    onDateChange: (dateRange) => {
      setQueryState(prevQuery => {
        return {
          ...prevQuery,
          displayDate: dateRange
        }
      })
    }
  })

  const changeDates = (period) => {
    const dateArray = setQueryDate(period)
    setQueryState(prevQuery => {
      return {
        ...prevQuery,
        firstStart: dateArray[0],
        firstEnd: dateArray[1],
        secondStart: dateArray[2],
        secondEnd: dateArray[3]
      }
    })
  }

  return (
    <QueryContext.Provider value={queryState}>
      <MainPage />
    </QueryContext.Provider>
  )
};

export default App;