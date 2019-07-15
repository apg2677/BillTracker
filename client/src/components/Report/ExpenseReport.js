import React, { Component } from "react";
import { Chart } from "react-google-charts";


class Report extends Component {
    
    

    render() {
        var displayMonth = this.props.month;
        console.log("Month: " + displayMonth);
        return (
            <div className="chart-container">

                <Chart
                    nameClass="currentInsight"
                    chartType="PieChart"
                    data={this.props.expenseData}
                    width={'500px'}
                    height={'300px'}

                    options={{
                        title: displayMonth,
                        is3D: true,
                    }}

                    rootProps={{ 'data-testid': '2' }} 

                />
            </div>
        );
    }
}


export default Report;

