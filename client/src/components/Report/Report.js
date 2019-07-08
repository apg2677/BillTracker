import React, { Component, useState } from "react";
import { Chart } from "react-google-charts";


import axios from "axios";

const Report = () => {

   // [expenseData, setExpenseData] = useState({});




    return (
        <div className="chart-container">

            <Chart
                nameClass="currentInsight"
                chartType="PieChart"
                data={state.expenseData}
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

export default Report;