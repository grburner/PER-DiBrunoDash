import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import DashboardContext from '../../context/index'

 
import "react-datepicker/dist/react-datepicker.css";
 
const DatePick = () => {
  const dateSwap = useContext(DashboardContext);
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <DatePicker selected={startDate} onClick={() => dateSwap.onClick('2020-20-20')} />
  );
};

export default DatePick;