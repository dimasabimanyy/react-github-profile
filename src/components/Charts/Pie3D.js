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
    type: "pie3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages",
        subCaption: "Most popular languages",
        captionFont: "Poppins",
        captionFontSize: "18",
        captionFontColor: "#fff",
        captionFontBold: "0",
        subCaptionFontSize: "14",
        subCaptionFontColor: "#a8c9cc",
        theme: "fusion",
        decimals: 0,
        pieRadius: "50%",
        bgColor: "#171a25",
        labelFont: "Poppins",
        labelFontColor: "#a8c9cc",
        labelFontSize: "14",
        baseFont: "Poppins",
        baseFontSize: "14",
        baseFontColor: "#a8c9cc",
        outCnvBaseFontColor: "#fff",
        // Make sure to have a lot of options if you want to set your own colors
        paletteColors: ["#f0db4f", "#6E24FC"],
      },
      // Chart Data
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
