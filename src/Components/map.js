import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
  
   constructor(props) {
        super(props);
        this.state = {
           // ГЕОлокация клиентa      
           // массив точек популярных роутов 
           // приемник точки полученной с клиента 
        }
    }
 
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
                defaultZoom = { 13 }
            >
            </GoogleMap>
        ));
        return(
            <div style={{ height: '60%', width: '100%'}}>
                <GoogleMapExample
                    containerElement={ <div style={{ height: '700px', width: 'inherit' }} /> }
                    mapElement={ <div style={{ height: `100%` }} /> }
                />
            </div>
        );
    }
};
export default Map;


// 1) показать новосибирск 
// 2) отрисовать популярные роуты с гет запроса 
//