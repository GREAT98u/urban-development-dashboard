// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Urban Planning </h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/TrafficPrediction">Traffic Prediction</Link>
        <Link to="/AirQualityMonitoring">Air Quality Monitoring</Link>
        <Link to="/GreenSpaceAllocation">Green Space Allocation</Link>
        <Link to="/PublicTransportOptimization">Public Transport Optimization</Link>
        <Link to="/HousingDemandPrediction">Housing Demand Prediction</Link>
        <Link to="/UrbanSafety">Urban Safety</Link>
        <Link to="/Reports">Reports</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
