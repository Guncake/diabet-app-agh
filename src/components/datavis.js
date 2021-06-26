import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const Dankmemes = (props) => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);
  console.log('props')
  console.log(props)

  const chart = () => {

    setChartData({
        labels: ['<20', '21-35', '36-50', '>50'],
        datasets: [
          {
            label: "szacowane procentowe ryzyko",
            data: props.data.agedata,
            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
            borderWidth: 4
          }
        ]
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h3>Średnie szacowane ryzyko cukrzycy dla danych grup wiekowych</h3>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Dankmemes;