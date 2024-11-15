import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './AirQualityMonitoring.css'

const AirQualityMonitoring = () => {
  const [map, setMap] = useState(null);
  const [regions, setRegions] = useState([
    { name: "Connaught Place", lat: 28.6358, lon: 77.224, aqi: 1 },
    { name: "Karol Bagh", lat: 28.6416, lon: 77.1809, aqi: 3 },
    { name: "Lajpat Nagar", lat: 28.5742, lon: 77.2471, aqi: 2 },
    // Add more regions here
  ]);

  // Function to return the color based on AQI
  const getAQIColor = (aqi) => {
    if (aqi === 1) {
      return 'green';
    } else if (aqi === 2) {
      return 'yellow';
    } else if (aqi === 3) {
      return 'orange';
    } else if (aqi === 4) {
      return 'red';
    } else {
      return 'brown'; // Very Poor
    }
  };

  // Initialize map
  useEffect(() => {
    const mapInstance = L.map('air-quality-map').setView([28.7041, 77.1025], 12); // Centered on Delhi

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapInstance);

    setMap(mapInstance);

    // Add markers for each region
    regions.forEach((region) => {
      const color = getAQIColor(region.aqi);

      const marker = L.marker([region.lat, region.lon]).addTo(mapInstance);
      marker.bindPopup(`<b>Region: ${region.name}</b><br>Air Quality Index: ${region.aqi}`)
        .openPopup();

      L.circle([region.lat, region.lon], {
        color: color,
        fillColor: color,
        fillOpacity: 0.6,
        radius: 3000, // Small radius for a specific location
      }).addTo(mapInstance);
    });

    return () => {
      mapInstance.remove();
    };
  }, [regions]);

  return (
    <div className="air-quality-container">
      <h2>Air Quality Monitoring</h2>
      <div id="air-quality-map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default AirQualityMonitoring;
