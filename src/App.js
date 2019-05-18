import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/map.js';
import Navbar from './Components/Header.js'
import SideMenu from "./Components/SideMenu";
import CreatePoint from "./Components/CreatePoint";
import {authPost, getPopRoutes} from './ApiWorker.js';
import Geoloc from './Components/Geoloc.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
         loginData: {login: "", password: ""}
    }
  }

  handleLogin = (log, pass) => {                                // получаем логпасс от аусПэйджа
        this.setState({loginData: {login: log, password: pass}});
   };

   handleLogout = () => {                                       // нолим лог пасс и выгоняем юзера
        this.setState({loginData: {login: "", password: ""}})
    };

 render () { 
  return (
       <div>
           <Navbar></Navbar>
           <div className="main-container">
               <div className="map-container">
                   <Map/>
               </div>
               <div className="aside-container">
                   <SideMenu/>
               </div>
              <div className="create-container">
                   <CreatePoint></CreatePoint>
               </div>
           </div>
       </div>
   );
 }
}
export default App;
