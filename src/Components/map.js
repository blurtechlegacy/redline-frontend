import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { geolocated } from "react-geolocated";

const style = {
    width: '50%',
    height: '80%',
    overflow: 'hidden'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
        console.log(this.state);
    }
    render() {
        if (!this.props.google) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Map
                    style={style}
                    google={this.props.google}
                    zoom={15}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={"Current location"}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyDVsJx-Hyq6w4laps9vUcA1gbq-mWLtH78",
    v: "3"
})(MapContainer);
