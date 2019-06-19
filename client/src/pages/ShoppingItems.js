import React, { Component } from "react";
import ShoppingItems from "../components/ShoppingItems/ShoppingItems";
import "../components/ShoppingItems/ShoppingItems.css";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import jsPDF from 'jspdf';
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import $ from "jquery";
import Button from 'react-bootstrap/Button';


class ShoppingList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

// Default export is a4 paper, portrait, using milimeters for units
  jsPDF() {
    var doc = new jsPDF();

    doc.text("RHMA Inventory List", 10, 10);

    doc.fromHTML($('#inventoryList').html(), 15, 15, {
      'width': 170
    });
    doc.save('RHMA Inventory List.pdf');
}

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (

      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Expense / Shopping List</strong>

              </h1>
              <h2 className="text-center">Add Inventory Needs and Items Below</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Inventory List" icon="far fa-edit">

            <div className="ListMain">
              <div className="header">
              <form onSubmit={this.addItem}>

                <input ref={(a) => this._inputElement = a} placeholder="Enter Your Items!">
                </input>

                <button type="submit">Add To List</button>

              </form>

            </div>

          <ShoppingItems pdf={this.jsPDF} entries={this.state.items} delete={this.deleteItem} />
        
            </div>
            <br></br>

            <Button variant="outline-primary" onClick={this.jsPDF}>Save/Print PDF</Button>

            </Card>

          </Col>
        </Row>

        <br></br>
       
        <Footer />
      </Container>

    );
  }
}


export default ShoppingList;
