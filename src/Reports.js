import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Reports.css';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  const [airQualityData, setAirQualityData] = useState([]);
  const [trafficData, setTrafficData] = useState([]);
  const [greenSpaceData, setGreenSpaceData] = useState([]);
  const [publicTransportData, setPublicTransportData] = useState([]);

  // Sample data fetching logic (replace with actual API calls)
  useEffect(() => {
    // Replace these with actual API calls
    setAirQualityData([30, 50, 80, 60, 70, 90, 100, 120]);
    setTrafficData([100, 150, 200, 180, 220, 250, 300, 350]);
    setGreenSpaceData([15, 18, 20, 22, 25, 28, 30, 35]);
    setPublicTransportData([500, 550, 600, 650, 700, 750, 800, 850]);
  }, []);

  // Charts data structure
  const airQualityChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Air Quality Index (AQI)',
        data: airQualityData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const trafficChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Traffic Congestion (Index)',
        data: trafficData,
        borderColor: 'rgba(53, 162, 235, 1)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const greenSpaceChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Green Space Coverage (%)',
        data: greenSpaceData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const publicTransportChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Public Transport Usage (People)',
        data: publicTransportData,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="reports-container">
      <h2>City Reports</h2>
      <p>Explore trends related to air quality, traffic, green spaces, and public transport.</p>

      {/* Air Quality Trend */}
      <div className="chart-container">
        <h3>Air Quality Trend (AQI)</h3>
        <Line data={airQualityChartData} />
      </div>

      {/* Traffic Congestion Trend */}
      <div className="chart-container">
        <h3>Traffic Congestion Trend</h3>
        <Line data={trafficChartData} />
      </div>

      {/* Green Space Coverage */}
      <div className="chart-container">
        <h3>Green Space Coverage</h3>
        <Bar data={greenSpaceChartData} />
      </div>

      {/* Public Transport Usage */}
      <div className="chart-container">
        <h3>Public Transport Usage</h3>
        <Line data={publicTransportChartData} />
      </div>
    </div>
  );
};

export default Reports;
