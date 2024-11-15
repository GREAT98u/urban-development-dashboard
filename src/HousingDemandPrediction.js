import React, { useState } from 'react';
import './HousingDemandPrediction.css';

const HousingDemandPrediction = () => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [housingType, setHousingType] = useState('');
  const [size, setSize] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we're just using dummy data for prediction
    const predictedDemand = predictHousingDemand(location, priceRange, housingType, size, amenities);
    setPrediction(predictedDemand);
  };

  const predictHousingDemand = (location, priceRange, housingType, size, amenities) => {
    // Dummy logic for prediction (this can be replaced with a real ML model)
    if (location === "Delhi" && priceRange === "Mid-Range" && housingType === "Apartment") {
      return "High Demand";
    }
    return "Moderate Demand";
  };

  const handleAmenitiesChange = (e) => {
    const value = e.target.value;
    if (amenities.includes(value)) {
      setAmenities(amenities.filter((amenity) => amenity !== value));
    } else {
      setAmenities([...amenities, value]);
    }
  };

  return (
    <div className="housing-demand-container">
      <h2>Housing Demand Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Price Range:</label>
          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Mid-Range">Mid-Range</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>Type of Housing:</label>
          <select value={housingType} onChange={(e) => setHousingType(e.target.value)}>
            <option value="">Select</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <div className="form-group">
          <label>Size (sq ft):</label>
          <input type="number" value={size} onChange={(e) => setSize(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Amenities:</label>
          <div>
            <label>
              <input type="checkbox" value="Gym" onChange={handleAmenitiesChange} /> Gym
            </label>
            <label>
              <input type="checkbox" value="Parking" onChange={handleAmenitiesChange} /> Parking
            </label>
            <label>
              <input type="checkbox" value="Pool" onChange={handleAmenitiesChange} /> Pool
            </label>
          </div>
        </div>
        <button type="submit">Predict Demand</button>
      </form>

      {prediction && (
        <div className="prediction-result">
          <h3>Predicted Housing Demand: {prediction}</h3>
        </div>
      )}
    </div>
  );
};

export default HousingDemandPrediction;
