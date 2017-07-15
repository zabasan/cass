import React, { Component } from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api'; // Única dependencia extra

// es muy importante añadirle height y width!!!
const MAP_STYLES = {
   height: '300px',
    width: '100%'
};

const OPTIONS = {
    center: {
        lat: -34.5658748,
        lng: -58.7011763
    },
    zoom: 17
};

const API_CONFIG = {
    key:'AIzaSyDMM08prNcq3RfFnR1BgsQ6NvMKUTnusWc',
    language: 'es'
};

export default class Mapa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillUnmount() {
        // limpiando despues el component ya no es usado
        // evita errores en la console
        const allScripts = document.getElementsByTagName( 'script' );
        // recopilar todos los scripts,
        // filtrar los que contengan la key en 'src'
        // eliminarlo
        [].filter.call(
            allScripts,
            ( scpt ) => scpt.src.indexOf( 'key=AIzaSyDMM08prNcq3RfFnR1BgsQ6NvMKUTnusWc' ) >= 0
        )[ 0 ].remove();
        // resetear la variable de Google
        window.google = {};
    }

    componentDidMount() {
        // Promise para que al ser resulta puedas manipular
        // las opciones de Google Maps
        loadGoogleMapsAPI( API_CONFIG ).then( googleMaps => {
            let map = new googleMaps.Map( this.refs.map, OPTIONS );
            let marker = new googleMaps.Marker({position: OPTIONS.center, map: map});
            var panorama = new googleMaps.StreetViewPanorama(document.getElementById('panorama'), {
                position: {lat: -34.5662116, lng: -58.7013111},
                pov: {
                    heading: 34,
                    pitch: 10
                }
            });
            googleMaps.event.addListener(marker, 'click', function() {
                window.open("https://www.google.com.ar/maps/place/Alpasuma+Hall/@-34.5658748,-58.7011763,15z/data=!4m5!3m4!1s0x0:0x76a1f8c585f619ba!8m2!3d-34.5658748!4d-58.7011763", "_blank");
            });
            map.setStreetView(panorama);
        }).catch( err => {
            console.warning( 'Something went wrong loading the map', err );
        });
    }

    render() {
        return (
            <div className="centrando">
                <div id="mapa">
                    <div ref="map" style={MAP_STYLES}>
                    </div>
                </div>
                <div id="panorama"></div>
            </div>
        )
    }
}


