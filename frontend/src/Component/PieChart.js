import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const axios = require ('axios');

class PieChart extends Component {
	constructor(props){

		super(props)
		this.state = {
			bathroom:0,
			kitchen:0,
			livingRoom:0,
			bedroom:0,
			entrance:0

		}
		
		axios.get('http://localhost:3001/sensors')
		.then(({data})=> {
			
			for(var i=0;i<data.length-1;i++){
				
				
				if(data[i].location ==='bedroom'){

						this.setState({bedroom:this.state.bedroom+1});
						
				}else if(data[i].location ==='livingroom')
				{
					this.setState({livingRoom:this.state.livingRoom+1});
				}else if (data[i].location ==='bedroom')
				{
					this.setState({bedroom:this.state.bedroom+1});
				}else if (data[i].location ==='bathroom')
				{
					this.setState({bathroom:this.state.bathroom+1});
				}else if (data[i].location ==='entrance')
				{
					this.setState({entrance:this.state.entrance+1});
				}
					
			}
		});
		
	}
	
		
		
	
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
					{ name: "Bathroom", y: this.state.bathroom },

					{ name: "Living Room", y: this.state.livingRoom },
					{ name: "Bedroom", y: this.state.bedroom },
					{ name: "Entrance", y: this.state.entrance }
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