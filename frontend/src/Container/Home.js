import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Container.css'

import StackedAreaChart from '../Component/StackedAreaChart';

import PieChart from '../Component/PieChart';

const axios = require ('axios');


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taille: 0,
      user: 0,
      sensor: 0,
      temp: 0,
      airPollution: 0
    };
  }
  componentDidMount() {
    let moyenne = 0;
    let moyenne2 = 0;
    axios.get("http://localhost:3001/users").then(({ data }) => {
      this.setState({
        user: data.length
      });
    });
    axios.get("http://localhost:3001/sensors").then(({ data }) => {
      this.setState({
        sensor: data.length
      });
    });
    axios.get("http://localhost:3001/measures/temperature").then(({ data }) => {
      for (var i = 0; i < data.length; i++) {
        moyenne = moyenne + data[i].value;
      }
      moyenne = Math.floor(moyenne / data.length);
    
      this.setState({
        temp: moyenne
      });
    });
    axios
      .get("http://localhost:3001/measures/airPollution")
      .then(({ data }) => {
        for (var i = 0; i < data.length; i++) {
          moyenne2 = moyenne2 + data[i].value;
        }
        moyenne2 = Math.floor(moyenne2 / data.length);
        this.setState({
          airPollution: moyenne2
        });
      });
  }
  render() {
    return (
      <div className="main">
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={6}>
              <div md="auto" className="chart">
                <h3>
                  Aujourd'hui il y {this.state.user} utilisateurs de capteurs
                </h3>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div md="auto" className="chart">
                <h3>
                  {this.state.sensor} capteurs sont en ce moment en activité
                </h3>
              </div>
            </Col>
          </Row>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
            <Col xs={12} md={6}>
              <div className="chart">
                <h3>
                  Pollution de l'air moyenne dans le monde :{" "}
                  {this.state.airPollution} particules fines
                </h3>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="chart">
                <h3>Temperature moyenne dans le monde : {this.state.temp} °</h3>
              </div>
            </Col>
          </Row>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <Row>
            <Col xs={12} md={6}>
              <div className="chart">
                <StackedAreaChart />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="chart">
                <PieChart />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home