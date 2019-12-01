import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Sensor By Location"
			},
			subtitles: [{
				
				verticalAlign: "center",
				fontSize: 20,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Bathroom", y: 5 },
					{ name: "Kitchen", y: 31 },
					{ name: "Living Room", y: 40 },
					{ name: "Bedroom", y: 17 },
					{ name: "Entrance", y: 7 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default PieChart