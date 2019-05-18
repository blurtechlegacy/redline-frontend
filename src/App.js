import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Map from './Components/map.js';
import Navbar from './Components/Header.js'
import SideMenu from "./Components/SideMenu";

function App() {
  return (
      <div>
          <Navbar></Navbar>
          <div className="main-container">
              <div className="map-container">
                  <Map/>
              </div>
          </div>
          <div className="aside-container">
              <SideMenu/>
          </div>
      </div>
  );
}

export default App;
