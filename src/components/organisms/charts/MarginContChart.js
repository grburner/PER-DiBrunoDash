import React, { useRef, useLayoutEffect } from 'react';
import '../../../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const MarginChart = () => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv3", am4charts.XYChart);

    x.paddingRight = 20;

    let data = [{
      "product": "Chono Carmenere",
      "marginCont": -.0865
    }, {
      "product": "Mayacamus Cabernet 2014",
      "marginCont": -.0734
    }, {
      "product": "Karine Sancerre",
      "marginCont": -.0664
    }, {
      "product": "Prisma Sauv Blanc",
      "marginCont": -.0523
    }, {
      "product": "Aubry Champagne",
      "marginCont": -.0522
    }, {
      "product": "Troncone",
      "marginCont": .0833
    }, {
      "product": "St Joseph",
      "marginCont": .0754
    }, {
      "product": "Brouilly",
      "marginCont": .0664
    }, {
      "product": "Furmint",
      "marginCont": .0523
    }, {
      "product": "Alter Alea",
      "marginCont": .05333
    }];

    x.data = data;

    let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "product";
    categoryAxis.title.text = "Products";

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Margin Contribution";

    let series = x.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "marginCont";
    series.dataFields.categoryX = "product";
    series.name = "Margin";
    series.columns.template.fill = am4core.color("#104547");

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div id="chartdiv3" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default MarginChart;