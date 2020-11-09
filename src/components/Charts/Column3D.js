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
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "430", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        theme: "candy",
        caption: "Popular",
        subCaption: "Most popular repos",
        yAxisName: "Stars",
        xAxisName: "Repos",
        xAxisNameFontSize: "16",
        yAxisNameFontSize: "16",
        captionFont: "Poppins",
        captionFontSize: "18",
        captionFontColor: "#fff",
        captionFontBold: "0",
        subCaptionFontSize: "14",
        subCaptionFontColor: "#a8c9cc",

        showShadow: "0",

        bgColor: "#171a25",
        canvasbgColor: "#171a25",
        showCanvasBg: "0",
        xAxisNameFont: "Poppins",
        xAxisNameFontColor: "#fff",
        xAxisNameFontBold: "0",
        yAxisNameFont: "Poppins",
        yAxisNameFontColor: "#fff",
        yAxisNameFontBold: "0",

        yAxisNameBorderColor: "#08ffbd",
        yAxisNameBorderPadding: "6",
        yAxisNameBorderRadius: "3",
        yAxisNameBorderThickness: "2",
        yAxisNameBorderDashed: "1",
        yAxisNameBorderDashLen: "4",
        yAxisNameBorderDashGap: "2",

        xAxisNameBorderColor: "#08ffbd",
        xAxisNameBorderPadding: "6",
        xAxisNameBorderRadius: "3",
        xAxisNameBorderThickness: "2",
        xAxisNameBorderDashed: "1",
        xAxisNameBorderDashLen: "4",
        xAxisNameBorderDashGap: "2",

        yAxisValueFontSize: "13",
        yAxisValueFontColor: "#a8c9cc",
        yAxisValueFontItalic: "1",

        // Hover effect
        // plotHoverEffect: "1",
        plotFillHoverColor: "#08ffbd",
        // plotBorderHoverThickness: "1",
        // plotBorderHoverDashed: "1",
        // plotBorderHoverDashLen: "6",
        // plotBorderHoverDashGap: "2",

        // Label
        labelDisplay: "rotate",
        slantLabel: "1",

        // padding
        canvasPadding: "30",

        //label font
        labelFont: "Poppins",
        labelFontColor: "#a8c9cc",
        labelFontSize: "12",
        labelFontBold: "0",
        lableFontItalic: "1",

        maxLabelHeight: "70",

        // data values
        placeValuesInside: "0",
        rotateValues: "0",
        valueFont: "Arial",
        valueFontColor: "#fff",
        valueFontSize: "12",
        valueFontBold: "1",
        valueFontItalic: "0",
        //--
        valueBorderColor: "#08ffbd",
        valueBorderPadding: "5",
        valueBorderRadius: "6",
        valueBorderThickness: "0.5",
        valueBorderDashed: "1",
        valueBorderDashLen: "4",
        valueBorderDashGap: "2",

        // Padding and margin

        xAxisNamePadding: "30",
        yAxisNamePadding: "25",
        yAxisValuesPadding: "10",
        labelPadding: "10",
        valuePadding: "5",

        // Make sure to have a lot of options if you want to set your own colors
        paletteColors: "#08ffbd",
      },
      // Chart Data
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
