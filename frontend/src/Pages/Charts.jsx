import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import axios from "axios";

const Charts = () => {
  const [companies, setCompanies] = useState([]);
  console.log(companies);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/data/");
      const data = res.data;
      setCompanies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="bg-slate-900 bg-opacity-50 p-4 rounded-md mx-auto max-w-4xl my-2">
        <Bar
          className=""
          data={{
            labels: companies.map((item) => item.name),
            datasets: [
              {
                label: "Revenue",
                data: companies.map((item) => item.revenue),
              },
            ],
          }}
        />
      </div>
      <div className="bg-slate-900 bg-opacity-50 p-4 rounded-md mx-auto max-w-4xl my-2">
        <Line
          className=""
          data={{
            labels: companies?.map((item) => item.name),
            datasets: [
              {
                label: "Average Monthly Sale",
                data: companies?.map((item) => item.averageMonthlySale),
              },
            ],
          }}
        />
      </div>
      <div className="bg-slate-900 bg-opacity-50 p-4 rounded-md mx-auto max-w-4xl my-2">
        <Doughnut
          className=""
          data={{
            labels: companies?.map((item) => item.name),
            datasets: [
              {
                label: "Employees",
                data: companies?.map((item) => item.employees),
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC071",
                  "#DF4929",
                  "#00DE9a",
                  "#DE00DE",
                  "#0900A7",
                  "#6D00A7",
                  "#BDCD00",
                ],
                borderColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC071",
                  "#DF4929",
                  "#00DE9a",
                  "#DE00DE",
                  "#0900A7",
                  "#6D00A7",
                  "#BDCD00",
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Charts;
