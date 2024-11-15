// GreenSpaceAllocation.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import './GreenSpaceAllocation.css';

const GreenSpaceAllocation = () => {
  const mapRef = useRef(null);

  // Real green spaces with approximate coordinates and sizes (in meters)
  const greenSpaces = [
    { name: "Central Ridge Reserve Forest", lat: 28.6358, lon: 77.2090, area: 150 },
    { name: "Sanjay Van", lat: 28.5406, lon: 77.1962, area: 150 },
    { name: "Lodhi Gardens", lat: 28.5933, lon: 77.2197, area: 130 },
    { name: "Nehru Park", lat: 28.5856, lon: 77.1943, area: 140 },
    { name: "Deer Park", lat: 28.5616, lon: 77.1910, area: 150 },
    { name: "Indraprastha Park", lat: 28.6131, lon: 77.2457, area: 145 },
    { name: "Asola Bhatti Wildlife Sanctuary", lat: 28.4733, lon: 77.2307, area: 150 },
    { name: "Garden of Five Senses", lat: 28.5163, lon: 77.1842, area: 135 },
  ];

  useEffect(() => {
    // Initialize the map if it hasn't been already
    if (!mapRef.current) {
      const map = L.map('green-space-map').setView([28.6139, 77.2090], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add circles for each green space
      greenSpaces.forEach((space) => {
        L.circle([space.lat, space.lon], {
          color: '#2a7a2a',
          fillColor: '#90ee90',
          fillOpacity: 0.5,
          radius: space.area * 10, // Radius in meters for visualization
        })
          .addTo(map)
          .bindPopup(`<b>${space.name}</b><br>Area: ${space.area} acres`);
      });

      // Store map instance to prevent reinitialization
      mapRef.current = map;
    }
  }, [greenSpaces]);

  return (
    <div className="green-space-container">
      <h2>Green Space Allocation</h2>
      <p>Explore real green spaces in Delhi and their approximate sizes.</p>
      <div id="green-space-map" className="green-space-map"></div>
    </div>
  );
};

export default GreenSpaceAllocation;
