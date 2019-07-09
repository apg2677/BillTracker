import React, { Component } from "react";
import { Chart } from "react-google-charts";


import axios from "axios";



class Report extends Component {
 
    state = {expenseData:this.props.expenseData};

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
        console.log(this.state);
        console.log(this.props);
        return (
            <div className="chart-container">

                <Chart
                    nameClass="currentInsight"
                    chartType="PieChart"
                    data={this.props.expenseData}
                    width={'500px'}
                    height={'300px'}

                    options={{
                        title: 'May Expense Report',
                        is3D: true,
                    }}

                    rootProps={{ 'data-testid': '2' }} 

                />
            </div>
        );
    }
}


export default Report;

