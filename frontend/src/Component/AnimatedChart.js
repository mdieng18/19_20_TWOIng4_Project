import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AnimatedChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title:{
				text: "Surface of the city versus its number of sensor",
			fontSize: 26
			},
			axisX: {
				title: "Pollution",
			logarithmic: true
			},
			axisY: {
				title: "Surface"
			},
			data: [{
				type: "bubble",
				indexLabel: "{label}",
				toolTipContent: "<b>{label}</b><br>Distance From Sun: {x}mn miles<br>Avg. Surface Temp: {y} Kelvin<br>Diameter: {z} miles",
				dataPoints: [
					{ label: "Paris", x: 36, y: 452, z: 3031 },
					{ label: "Vienne", x: 67.2, y: 726, z: 7521 },
					{ label: "Tokyo", x: 93, y: 285, z: 7926 },
					{ label: "New-York", x: 141.6, y: 230, z: 4222 },
					{ label: "Sidney", x: 483.6, y: 120, z: 88729 },
					{ label: "Dour", x: 886.7, y: 88, z: 74600 },
					{ label: "Bangkok", x: 1784.0, y: 59, z: 32600 },
					{ label: "Moscou", x: 2794.4, y: 48, z: 30200 },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default AnimatedChart;          