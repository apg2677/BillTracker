import React, { Component } from "react";
import { Chart } from "react-google-charts";


class Report extends Component {
 


    render() {

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

