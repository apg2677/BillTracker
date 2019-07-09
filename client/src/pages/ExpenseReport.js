import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Report from "../components/Report/ExpenseReport";
import axios from "axios";

class ExpenseReport extends Component {

  state = {
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    y:""
  };
  componentDidMount() {
    this.getData();
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.post("/api/expense", {
      month: this.state.p,
      year: this.state.y,
      rentMortgage: this.state.q,
      insurance: this.state.v,
      tax: this.state.r,
      payroll: this.state.s,
      advertising: this.state.t,
      utilities: this.state.u

    }).then(res => {
      console.log(res);
      this.getData();
     
    }).catch(error => {
      console.log(error);
    })
  }



  getData() {
    axios.get("/api/expense").then(res => {
      res = res.data;
      const resLen = res.length - 1;
      console.log("resLen: " + resLen);
      console.log(res[resLen].payroll);
      this.setState({
        expenseData: [
          ["Expense", "Amount"],
          ["advertising", res[resLen].advertising],
          ["insurance", res[resLen].insurance],
          ["payroll", res[resLen].payroll],
          ["rentMortgage", res[resLen].rentMortgage],
          ["utilities", res[resLen].utilities]
        ]
      });
    });
  }

  render() {
    return (

      <Container>
        <Row>
          <Col size="md-12">

            <Jumbotron>
              <h1 className="text-center">
                <strong>Learn Your True Cost of Doing Business</strong>
              </h1>
              <h2 className="text-center">Input Your Expenses for Data Insights</h2>
            </Jumbotron>

          </Col>

          <Col size="md-12">
            <Card title="Expense Report" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                
              />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Card title="Current Insights" icon="fas fa-chart-pie">

              <Row>
                <Col size="md-12">

                  <div align="center">
                    <Report expenseData={this.state.expenseData}></Report>

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

export default ExpenseReport;

