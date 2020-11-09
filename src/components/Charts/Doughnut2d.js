// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const ChartComponent = ({ data }) => {
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars",
        subCaption: "Stars per language",
        theme: "candy",
        decimals: 0,
        doughnutRadius: "40%",
        showPercentValues: 0,
        bgColor: "#171a25",
        captionFont: "Poppins",
        captionFontSize: "18",
        captionFontColor: "#fff",
        captionFontBold: "0",
        subCaptionFontSize: "14",
        subCaptionFontColor: "#a8c9cc",
        animateClockwise: "1",
        plotHighlightEffect: "fadeout",

        labelFont: "Poppins",
        labelFontColor: "#a8c9cc",
        labelFontSize: "14",
        baseFont: "Poppins",
        baseFontSize: "14",
        baseFontColor: "#a8c9cc",
        outCnvBaseFontColor: "#fff",

        legendIconBgColor: "#08ffbd",
        // legendIconAlpha: "50",
        // legendIconBgAlpha: "30",
        legendIconBorderColor: "#00a579",
        legendIconBorderThickness: "3",

        legendNumRows: "3",
        legendNumColumns: "3",

        legendItemFont: "Poppins",
        legendItemFontSize: "13",
        legendItemFontColor: "#a8c9cc",
        legendItemFontBold: "0",
        // Make sure to have a lot of options if you want to set your own colors
        paletteColors:
          "#13EBA2, #3BFEB8, #0AD48B, #05AC72, #06a06a, #056644, #105e41",
      },
      // Chart Data
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
