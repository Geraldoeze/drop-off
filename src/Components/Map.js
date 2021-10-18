import React from 'react'
import './Map.css'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken="pk.eyJ1IjoiZ2FsbGFudDcwMSIsImEiOiJja3V2d2Z1azYwMGpzMm5xd3MyODhxajE2In0.Kxtv3Cg8rlL_QZYJKfXMxg"

class Maps extends React.Component {
    constructor(props){
        super(props);
        this.state={
            lng: 7.398574,
            lat: 9.076479,
            zoom: 10
        }
    }

    componentDidMount(){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [this.state.lng, this.state.lat], // starting position [lng, lat]
            zoom: this.state.zoom // starting
        })
      
        

        
    }
    render() { 
        return (
            <div>
                <div className="mapps" ref={el => this.mapContainer=el}>

                </div>
            </div>
        )
    }
}
 
export default Maps;