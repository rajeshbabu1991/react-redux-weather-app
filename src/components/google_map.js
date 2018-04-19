import React, { Component } from 'react';

class GoogleMap extends Component {
    // Life cycle method calls after component is rendered to the screen.
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render () {
        // this.refs.map would give us the reference to this element.
        return <div ref="map" />
    } 
}

export default GoogleMap;