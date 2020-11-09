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
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const ChartComponent = ({ data }) => {
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "area2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Forked",
        subCaption: "Most forked repos",
        yAxisName: "Forks",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
        captionFont: "Poppins",
        captionFontSize: "18",
        captionFontColor: "#fff",
        captionFontBold: "0",
        subCaptionFontSize: "14",
        subCaptionFontColor: "#a8c9cc",
        bgColor: "#171a25",
        theme: "candy",

        yAxisValueFontSize: "13",
        yAxisValueFontColor: "#a8c9cc",
        yAxisValueFontItalic: "1",

        // Label
        labelDisplay: "rotate",
        slantLabel: "1",

        xAxisNameFont: "Poppins",
        xAxisNameFontColor: "#fff",
        xAxisNameFontBold: "0",
        yAxisNameFont: "Poppins",
        yAxisNameFontColor: "#fff",
        yAxisNameFontBold: "0",

        //label font
        labelFont: "Poppins",
        labelFontColor: "#a8c9cc",
        labelFontSize: "12",
        labelFontBold: "0",
        lableFontItalic: "1",

        maxLabelHeight: "70",

        // Make sure to have a lot of options if you want to set your own colors
        paletteColors: "#08FFBD",
      },
      // Chart Data
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
