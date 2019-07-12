import React, { Component } from "react";
import Chart from 'react-google-charts';
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Expense from "../components/Expense";
import Quarter from "../components/Quarter";
import Report from "../components/Report/ExpenseReport";
import axios from "axios";
import QtrSel from "../components/QtrSelect";


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

class BusinessAnalysis extends Component {
  state = {
    expenseData1: [],
    expenseData2: [],
    expenseData3: [],
    expenseData4: [],
    qtr : 2
  };

  componentDidMount() {
    this.getData();
  }
  getData() {
    axios.get(`/api/expense/${this.state.qtr}`).then(res => {
      res = res.data;
      console.log("Res Data:" + JSON.stringify(res[0]));

      const resLen = res.length - 1;
      console.log("resLen: " + resLen);
      console.log(res[resLen].payroll);
      this.setState({
        expenseData1: [
          ["Expense", "Amount"],
          ["advertising", res[0].advertising],
          ["insurance", res[0].insurance],
          ["payroll", res[0].payroll],
          ["rentMortgage", res[0].rentMortgage],
          ["utilities", res[0].utilities],
        ],
        expenseData2: [
          ["Expense", "Amount"],
          ["advertising", res[1].advertising],
          ["insurance", res[1].insurance],
          ["payroll", res[1].payroll],
          ["rentMortgage", res[1].rentMortgage],
          ["utilities", res[1].utilities],
        ],
        expenseData3: [
          ["Expense", "Amount"],
          ["advertising", res[2].advertising],
          ["insurance", res[2].insurance],
          ["payroll", res[2].payroll],
          ["rentMortgage", res[2].rentMortgage],
          ["utilities", res[2].utilities],
        ],
        expenseData4: [
          ["Expense", "Amount"],
          ["advertising", res[3].advertising],
          ["insurance", res[3].insurance],
          ["payroll", res[3].payroll],
          ["rentMortgage", res[3].rentMortgage],
          ["utilities", res[3].utilities],
        ]
      });
    });
  }
  
  handleQtr()  {
    alert("test!");
  };



  render() {
    
    return (

      <Container>


        <select onChange={this.handleQtr} id="quarter" name="quarter" className="form-control">
          <option selected value={1} >Qtr 1</option>
          <option value={2}>Qtr 2</option>
          <option value={3}>Qtr 3</option>
          <option calue={4}>Qtr 4</option>
        </select>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Business Analysis Visual</strong>

              </h1>
              <h2 className="text-center">Review Your Monthly Insights Below</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">

            <Card title="Visuals" icon="fas fa-money-check-alt">

              <Row>
                <Col size="md-6">
                  <div>
                    <Report expenseData={this.state.expenseData1}></Report>
                  </div>
                </Col>
                <Col size="md-6">
                  <div>
                    <Report expenseData={this.state.expenseData2}></Report>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col size="md-6">
                  <div>
                    <Report expenseData={this.state.expenseData3}></Report>
                  </div>
                </Col>
                <Col size="md-6">
                  <div>
                    <Report expenseData={this.state.expenseData4}></Report>
                  </div>
                </Col>
              </Row>
            </Card>

          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default BusinessAnalysis;

