import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl'
import { useState } from 'react'
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 37.1011363,
        longitude: -115.7246524,
        zoom: 7,
        width: '100vw',
        height: '50vh'
    });

    const navigationControlStyle = {
        right: 20,
        top: 60
    }

    const geolocateControlStyle = {
        right: 20,
        top: 20
    }

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={setViewport}
            mapStyle={'mapbox://styles/mapbox/satellite-v9'}
        >
            <NavigationControl style={navigationControlStyle} />
            <GeolocateControl 
                style={geolocateControlStyle} 
                trackUserLocation={true}
                positionOptions={{enableHighAccuracy: true}}
                showAccuracyCircle={true}
            />
            <Marker latitude={37.1011363} longitude={-115.7246524}>
                <div style={{width: '1em', height: '1em', backgroundColor: 'red'}}></div>
            </Marker>
        </ReactMapGL>
    );
}
 
export default Map;