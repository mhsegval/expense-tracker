import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { Col, Container, Row } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Yearly Expense chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dataDough = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Category",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const data = {
  labels,
  datasets: [
    {
      label: "Amount: $",
      data: {
        January: 1000,
        February: 1250,
        March: 1250,
        April: 3000,
        May: 3210,
        June: 1000,
        July: 2090,
        August: 1500,
        September: 500,
        October: 980,
        November: 400,
        December: 5000,
      },
      backgroundColor: "#36d1dc",
    },
  ],
};

const ExampleChart = () => {
  return (
    <Row>
      <Col>
        <Container>
          <Bar options={options} data={data} />
        </Container>
      </Col>
      <Col>
        <Container>
          <Doughnut data={dataDough} />
        </Container>
      </Col>
    </Row>
  );
};

export default ExampleChart;
