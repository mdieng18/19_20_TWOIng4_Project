import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Container.css'
import LineChart from '../Component/LineChart';
import StackedAreaChart from '../Component/StackedAreaChart';
import AnimatedChart from '../Component/AnimatedChart';
import PieChart from '../Component/PieChart';
const axios = require ('axios');


class Home extends Component {
    render() {
        return(
            
        <div className = 'main'>
        
        <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={6}>
    <div md ='auto' class = 'chart' ><h3>Aujourd'hui il y 250 000 capteurs en circulation</h3></div>
    </Col>
    <Col xs={12} md={6}>
    <div md ='auto' class = 'chart'><h3>La moyenne des températures par pays est de 23°F</h3></div>
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={12} md={6}>
    <div class = 'chart'><StackedAreaChart/></div>
    </Col>
    <Col xs={12} md={6}>
    <div class = 'chart'><AnimatedChart/></div>
    </Col>
    
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={12} md={6}>
    <div class = 'chart'><LineChart/></div>
    </Col>
    <Col xs={12} md={6}>
    <div class = 'chart'><PieChart/></div>
    </Col>
    
  </Row>
</Container>
        </div>

        )
    }
}

export default Home