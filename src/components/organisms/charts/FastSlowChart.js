import React, { useRef, useLayoutEffect } from 'react';
import '../../../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const FastSlow = () => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv4", am4charts.XYChart);

    x.paddingRight = 20;

    let data = [{
      "product": "Chono Carmenere",
      "delta": -277
    }, {
      "product": "Mayacamus Cabernet 2014",
      "delta": -256
    }, {
      "product": "Karine Sancerre",
      "delta": -200
    }, {
      "product": "Prisma Sauv Blanc",
      "delta": -131
    }, {
      "product": "Aubry Champagne",
      "delta": -85
    }, {
      "product": "Troncone",
      "delta": 89
    }, {
      "product": "St Joseph",
      "delta": 201
    }, {
      "product": "Brouilly",
      "delta": 220
    }, {
      "product": "Furmint",
      "delta": 401
    }, {
      "product": "Alter Alea",
      "delta": 456
    }];

    x.data = data;

    let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "product";
    categoryAxis.title.text = "Products";

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Margin Contribution";

    let series = x.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "delta";
    series.dataFields.categoryX = "product";
    series.name = "Delta";
    series.columns.template.fill = am4core.color("#104547");

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div id="chartdiv4" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default FastSlow;