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
    qtr: 1,
    month:0
  }
  handleQtr = this.handleQtr.bind(this);
  componentDidMount() {
   // this.handleQtr();
   this.getData(this.state.qtr);
  }
  componentDidUpdate(prevProps, prevState) {
    this.getData(this.state.qtr);
  }

  componentWillMount() {
    // this.getData(this.state.qtr);
  }
  getData(qtr) {
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
        ],
      
        mon1: this.displayMonth(res[0].month),
        mon2: this.displayMonth(res[1].month),
        mon3: this.displayMonth(res[2].month),
        mon4: this.displayMonth(res[3].month)
      });
    });
  }
  displayMonth(mon) {
    switch(mon) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8: 
        return "August";
      case 9:
        return "September";
      case 10:
        return "Octover";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  }

  handleQtr(event)  {
    console.log("Inside HandleQtr");
    var newQtr = event.target.value;
    this.setState({...this.state, qtr : newQtr});

    console.log("\t" + newQtr);
    this.getData(newQtr);
  
  };


  render() {
    
    return (

      <Container>


        <select value={this.state.qtr} onChange={this.handleQtr} id="quarter" name="quarter" className="form-control">
          <option selected value={1} >Qtr 1</option>
          <option value={2}>Qtr 2</option>
          <option value={3}>Qtr 3</option>
          <option value={4}>Qtr 4</option>
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
                    <Report month={this.state.mon1} expenseData={this.state.expenseData1}></Report>
                  </div>
                </Col>
                <Col size="md-6">
                  <div>
                    <Report month={this.state.mon2} expenseData={this.state.expenseData2}></Report>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col size="md-6">
                  <div>
                    <Report month={this.state.mon3} expenseData={this.state.expenseData3}></Report>
                  </div>
                </Col>
                <Col size="md-6">
                  <div>
                    <Report month={this.state.mon4} expenseData={this.state.expenseData4}></Report>
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

