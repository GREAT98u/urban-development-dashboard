import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import './UrbanSafety.css';

const UrbanSafety = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const mapRef = useRef(null);

  // Sample crime hotspot data (can be replaced with real data from an API)
  const crimeHotspots = [
    { name: 'Connaught Place', lat: 28.6348, lon: 77.2190, crimeType: 'Theft', incidents: 10, safetyTip: 'Be cautious in crowded areas, avoid carrying large amounts of cash.' },
    { name: 'Karol Bagh', lat: 28.6448, lon: 77.1830, crimeType: 'Pickpocketing', incidents: 15, safetyTip: 'Keep your valuables secured and be alert in crowded spots.' },
    { name: 'Chandni Chowk', lat: 28.6508, lon: 77.2302, crimeType: 'Snatching', incidents: 8, safetyTip: 'Stay in well-lit areas and avoid walking alone at night.' },
    { name: 'Sarai Kale Khan', lat: 28.5931, lon: 77.2581, crimeType: 'Robbery', incidents: 5, safetyTip: 'Avoid isolated areas and report suspicious activity immediately.' },
  ];

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('urban-safety-map').setView([28.6139, 77.2090], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      crimeHotspots.forEach((hotspot) => {
        const marker = L.circleMarker([hotspot.lat, hotspot.lon], { color: 'red', radius: 8 })
          .addTo(map)
          .bindPopup(
            `<b>${hotspot.name}</b><br>Crime Type: ${hotspot.crimeType}<br>Incidents: ${hotspot.incidents}`
          );
        
        // On marker click, show safety tip
        marker.on('click', () => {
          setSelectedHotspot(hotspot);
        });
      });

      mapRef.current = map;
    }
  }, []);

  return (
    <div className="urban-safety-container">
      <h2>Urban Safety Map</h2>
      <p>Explore crime hotspots and receive safety tips for various areas.</p>

      <div id="urban-safety-map" className="urban-safety-map"></div>

      {selectedHotspot && (
        <div className="safety-info">
          <h3>Safety Information for {selectedHotspot.name}</h3>
          <p><strong>Crime Type:</strong> {selectedHotspot.crimeType}</p>
          <p><strong>Incidents Reported:</strong> {selectedHotspot.incidents}</p>
          <p><strong>Safety Tip:</strong> {selectedHotspot.safetyTip}</p>
        </div>
      )}
    </div>
  );
};

export default UrbanSafety;
