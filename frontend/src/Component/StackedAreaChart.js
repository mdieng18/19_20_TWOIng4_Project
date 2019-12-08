import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
import axios from 'axios';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class StackedAreaChart extends Component {
  getHumidity() {
    var var2 = 0;
    var date = new Date("December 25, 1995 23:15:00");

    axios.get("http://localhost:3001/measures/humidity").then(({ data }) => {
      for (var i = 0; i < data.length - 2; i++) {
        date = new Date(data[i].creationDate);
        date = date.getMonth();

        var2 = this.state.humidity[date] + 1;
        this.setState(state => {
          state.humidity.splice(date, 1, var2);
        });
      }
    });
  }
  getTemperature() {
    var var2 = 0;
    var date = new Date("December 25, 1995 23:15:00");

    axios.get("http://localhost:3001/measures/temperature").then(({ data }) => {
      for (var i = 0; i < data.length - 2; i++) {
        date = new Date(data[i].creationDate);
        date = date.getMonth();

        var2 = this.state.temperature[date] + 1;
        this.setState(state => {
          state.temperature.splice(date, 1, var2);
        });
      }
    });
  }
  getAirPollution() {
    var var2 = 0;
    var date = new Date("December 25, 1995 23:15:00");

    axios
      .get("http://localhost:3001/measures/airPollution")
      .then(({ data }) => {
        for (var i = 0; i < data.length - 2; i++) {
          date = new Date(data[i].creationDate);

          date = date.getMonth();

          var2 = this.state.airPollution[date] + 1;
          this.setState(state => {
            state.airPollution.splice(date, 1, var2);
          });
        }
      });
  }

  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);

    this.state = {
      temperature: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      airPollution: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      humidity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };

    axios
      .all([this.getHumidity(), this.getTemperature(), this.getAirPollution()])
      .then(axios.spread(function(humid, temp, airp) {}));
  }

  toggleDataSeries(e) {
    this.chart.render();
  }

  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,

      title: {
        text: "Number of sensor created by month "
      },
      axisY: {
        title: "Sensor"
      },
      toolTip: {
        shared: true
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        itemclick: this.toggleDataSeries
      },
      data: [
        {
          type: "stackedArea",
          name: "Humidity",
          showInLegend: true,
          xValueFormatString: "MM",
          dataPoints: [
            { x: new Date(2019, 0), y: this.state.humidity[1] },
            { x: new Date(2019, 1), y: this.state.humidity[2] },
            { x: new Date(2019, 2), y: this.state.humidity[3] },
            { x: new Date(2019, 3), y: this.state.humidity[4] },
            { x: new Date(2019, 4), y: this.state.humidity[5] },
            { x: new Date(2019, 5), y: this.state.humidity[6] },
            { x: new Date(2019, 6), y: this.state.humidity[7] },
            { x: new Date(2019, 7), y: this.state.humidity[8] },
            { x: new Date(2019, 8), y: this.state.humidity[9] },
            { x: new Date(2019, 9), y: this.state.humidity[10] },
            { x: new Date(2019, 10), y: this.state.humidity[11] },
            { x: new Date(2019, 11), y: this.state.humidity[12] }
          ]
        },
        {
          type: "stackedArea",
          name: "Temperature",
          showInLegend: true,
          xValueFormatString: "MM",
          dataPoints: [
            { x: new Date(2019, 0), y: this.state.temperature[1] },
            { x: new Date(2019, 1), y: this.state.temperature[2] },
            { x: new Date(2019, 2), y: this.state.temperature[3] },
            { x: new Date(2019, 3), y: this.state.temperature[4] },
            { x: new Date(2019, 4), y: this.state.temperature[5] },
            { x: new Date(2019, 5), y: this.state.temperature[6] },
            { x: new Date(2019, 6), y: this.state.temperature[7] },

            { x: new Date(2019, 7), y: this.state.temperature[8] },
            { x: new Date(2019, 8), y: this.state.temperature[9] },
            { x: new Date(2019, 9), y: this.state.temperature[10] },
            { x: new Date(2019, 10), y: this.state.temperature[11] },
            { x: new Date(2019, 11), y: this.state.temperature[12] }
          ]
        },
        {
          type: "stackedArea",
          name: "Air Pollution",
          showInLegend: true,
          xValueFormatString: "MM",
          dataPoints: [
            { x: new Date(2019, 0), y: this.state.airPollution[1] },
            { x: new Date(2019, 1), y: this.state.airPollution[2] },
            { x: new Date(2019, 2), y: this.state.airPollution[3] },
            { x: new Date(2019, 3), y: this.state.airPollution[4] },
            { x: new Date(2019, 4), y: this.state.airPollution[5] },
            { x: new Date(2019, 5), y: this.state.airPollution[6] },
            { x: new Date(2019, 6), y: this.state.airPollution[7] },

            { x: new Date(2019, 7), y: this.state.airPollution[8] },
            { x: new Date(2019, 8), y: this.state.airPollution[9] },
            { x: new Date(2019, 9), y: this.state.airPollution[10] },
            { x: new Date(2019, 10), y: this.state.airPollution[11] },
            { x: new Date(2019, 11), y: this.state.airPollution[12] }
          ]
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default StackedAreaChart;