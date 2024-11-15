// Dashboard.js
import React, { useEffect } from 'react';
import './Dashboard.css';
import L from 'leaflet';

const Dashboard = () => {
  useEffect(() => {
    // Initialize the map when component mounts
    const map = L.map('map-placeholder').setView([28.7041, 77.1025], 10); // Center on Delhi

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker at a specific location (Delhi)
    L.marker([28.7041, 77.1025]).addTo(map).bindPopup('Delhi').openPopup();

    return () => {
      map.remove(); // Clean up map on component unmount
    };
  }, []);

  return (
    <div className="dashboard">
      <section id="dashboard" className="dashboard-section">
        <h1>City Dashboard</h1>
        <div className="overview">
          <div className="metric-card">Air Quality Index: <span>Moderate</span></div>
          <div className="metric-card">Traffic Congestion: <span>High</span></div>
          <div className="metric-card">Green Space: <span>25%</span></div>
        </div>
        <div className="map-container">
          <h2>City Map Overview</h2>
          <div id="map-placeholder" className="map-placeholder"></div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
