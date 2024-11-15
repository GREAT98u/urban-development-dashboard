import React, { useEffect, useState, useCallback } from 'react';
import './TrafficPrediction.css';

const TrafficPrediction = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [predictedTraffic, setPredictedTraffic] = useState('Loading...');
  const [predictionTime, setPredictionTime] = useState(new Date());

  const predictTraffic = useCallback(() => {
    const totalCongestion = trafficData.reduce((acc, data) => {
      switch (data.congestionLevel) {
        case 'High':
          return acc + 3;
        case 'Moderate':
          return acc + 2;
        case 'Low':
          return acc + 1;
        default:
          return acc;
      }
    }, 0);

    if (totalCongestion > 5) {
      setPredictedTraffic('Heavy Traffic Expected');
    } else if (totalCongestion > 2) {
      setPredictedTraffic('Moderate Traffic Expected');
    } else {
      setPredictedTraffic('Light Traffic Expected');
    }

    setPredictionTime(new Date());
  }, [trafficData]);

  const fetchTrafficData = useCallback(() => {
    const mockTrafficData = [
      { location: 'Ring Road', congestionLevel: 'High', estimatedDelay: '15 min' },
      { location: 'Connaught Place', congestionLevel: 'Moderate', estimatedDelay: '10 min' },
      { location: 'Outer Ring Road', congestionLevel: 'Low', estimatedDelay: '5 min' },
    ];

    setTrafficData(mockTrafficData);
    predictTraffic();
  }, [predictTraffic]);

  useEffect(() => {
    fetchTrafficData();

    const intervalId = setInterval(fetchTrafficData, 60000);
    return () => clearInterval(intervalId);
  }, [fetchTrafficData]);

  return (
    <div className="traffic-prediction-container">
      <h2>Traffic Prediction</h2>
      <div className="traffic-prediction-card">
        <h3>Predicted Traffic Condition</h3>
        <p>{predictedTraffic}</p>
        <p>Last Updated: {predictionTime.toLocaleTimeString()}</p>
      </div>
      
      <h3>Real-Time Traffic Data</h3>
      <ul className="traffic-data-list">
        {trafficData.map((data, index) => (
          <li key={index} className="traffic-data-item">
            <strong>{data.location}:</strong> {data.congestionLevel} congestion, {data.estimatedDelay} delay
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrafficPrediction;
