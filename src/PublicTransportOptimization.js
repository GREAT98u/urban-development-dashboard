import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import './PublicTransportOptimization.css';

const PublicTransportOptimization = () => {
  const mapRef = useRef(null);

  // Sample transport hubs in Delhi with coordinates
  const transportHubs = [
    { name: "Rajiv Chowk Metro Station", lat: 28.6328, lon: 77.2197, optimization: "Increase frequency during peak hours" },
    { name: "Kashmere Gate Metro Station", lat: 28.6674, lon: 77.2265, optimization: "Improve access to bus stands" },
    { name: "New Delhi Railway Station", lat: 28.6431, lon: 77.2185, optimization: "Add shuttle services to nearby areas" },
    { name: "Anand Vihar ISBT", lat: 28.6457, lon: 77.3152, optimization: "Expand waiting areas and real-time tracking" },
    { name: "Sarai Kale Khan ISBT", lat: 28.5931, lon: 77.2581, optimization: "Enhance intermodal connectivity" },
    { name: "Hauz Khas Metro Station", lat: 28.5494, lon: 77.2001, optimization: "Extend bike-sharing facilities" },
  ];

  // Define sample routes between transport hubs with coordinates
  const routes = [
    [[28.6328, 77.2197], [28.6674, 77.2265]], // Rajiv Chowk to Kashmere Gate
    [[28.6431, 77.2185], [28.6457, 77.3152]], // New Delhi Railway Station to Anand Vihar ISBT
    [[28.5931, 77.2581], [28.5494, 77.2001]], // Sarai Kale Khan to Hauz Khas
    // Add more routes as needed
  ];

  useEffect(() => {
    // Initialize the map if it hasn't been already
    if (!mapRef.current) {
      const map = L.map('transport-optimization-map').setView([28.6139, 77.2090], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add circle markers for each transport hub
      transportHubs.forEach((hub) => {
        const marker = L.circleMarker([hub.lat, hub.lon], {
          radius: 8, // Size of the dot
          color: '#0088cc', // Outline color
          fillColor: '#0077b6', // Fill color
          fillOpacity: 0.8,
        }).addTo(map);

        // Bind the popup to show on hover (mouseover event)
        marker.on('mouseover', () => {
          marker.bindPopup(`<b>${hub.name}</b><br>Optimization: ${hub.optimization}`).openPopup();
        });

        marker.on('mouseout', () => {
          marker.closePopup();
        });
      });

      // Add polylines to represent routes with colors
      routes.forEach((route, index) => {
        L.polyline(route, {
          color: index % 2 === 0 ? '#ff5733' : '#33c0ff', // Alternate colors for different routes
          weight: 4,
          opacity: 0.7,
          lineJoin: 'round',
        }).addTo(map);
      });

      // Store map instance to prevent reinitialization
      mapRef.current = map;
    }
  }, [transportHubs, routes]);

  return (
    <div className="public-transport-container">
      <h2>Public Transport Optimization</h2>
      <p>Identify key transport hubs and suggested improvements, along with optimized routes.</p>
      <div id="transport-optimization-map" className="transport-optimization-map"></div>
    </div>
  );
};

export default PublicTransportOptimization;
