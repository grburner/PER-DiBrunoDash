import React, { useRef, useLayoutEffect } from 'react';
import '../../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const GoalsChart = () => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv2", am4charts.XYChart);

    x.paddingRight = 20;

    let data = [{
      "date": new Date(2018, 3, 20),
      "revenue": 1000,
      "goal": 1700
    }, {
      "date": new Date(2018, 3, 21),
      "revenue": 1200,
      "goal": 1700
    }, {
      "date": new Date(2018, 3, 22),
      "revenue": 1400,
      "goal": 1700
    }, {
      "date": new Date(2018, 3, 23),
      "revenue": 1800,
      "goal": 1700
    }];

    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = "date";
    dateAxis.title.text = "Date"

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Revenue";

    let series2 = x.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "goal";
    series2.dataFields.dateX = "date";
    series2.name = "Goal";
    series2.columns.template.fill = am4core.color("#104547");

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "revenue";
    series.name = "Revenue"
    x.cursor = new am4charts.XYCursor();

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default GoalsChart;