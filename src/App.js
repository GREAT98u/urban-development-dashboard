import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import TrafficPrediction from './TrafficPrediction';
import AirQualityMonitoring from './AirQualityMonitoring';
import GreenSpaceAllocation from './GreenSpaceAllocation';
import PublicTransportOptimization from './PublicTransportOptimization';
import HousingDemandPrediction from './HousingDemandPrediction';
import Reports from './Reports';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UrbanSafety from './UrbanSafety';

function App() {
  
  return (
    <div className="app-container">
    <Sidebar />
    <div className="content">
      <Routes>
        <Route path='/' element = {<Dashboard/>}/>
        <Route path='/TrafficPrediction' element = {<TrafficPrediction/>}/>
        <Route path='/AirQualityMonitoring' element = {<AirQualityMonitoring/>}/>
        <Route path='/GreenSpaceAllocation' element = {<GreenSpaceAllocation/>}/>
        <Route path='/PublicTransportOptimization' element = {<PublicTransportOptimization/>}/>
        <Route path='/HousingDemandPrediction' element = {<HousingDemandPrediction/>}/>
        <Route path='/UrbanSafety' element = {<UrbanSafety/>}/>
        <Route path='/Reports' element = {<Reports/>}/>
      </Routes>
    </div>
  </div>
  );
}

export default App;
