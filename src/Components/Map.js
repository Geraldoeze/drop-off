import React, {  useRef, useState, useEffect }from 'react'
import './Map.css'
import mapboxgl from 'mapbox-gl'



mapboxgl.accessToken="pk.eyJ1IjoiZ2FsbGFudDcwMSIsImEiOiJja3V2d2Z1azYwMGpzMm5xd3MyODhxajE2In0.Kxtv3Cg8rlL_QZYJKfXMxg"



const Maps = ({ late, long }) => {
    const mapContainerRef = useRef(null)
    
    const [lng, setLng]= useState( 7.398574);
    const [lat, setLat]= useState(9.076479);
    const zoom = 10;

    
    //Initialize map when component mounts
    useEffect (() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [lng, lat], // starting position [lng, lat]
            zoom: zoom // starting
        });
       
        map.on('move',() => {
            setLng([long])
            setLat([late])
        });
         //Add navigation control (+/- buttons)
         map.addControl(new mapboxgl.NavigationControl(), "top-left");

        //clean up on umount
        return () => map.remove();
    
    
        
    },[]);
        
        
        
    return (  
        <div>
            <div className="mapps" ref={mapContainerRef} on>

            </div>

        </div>
    );
}
 
export default Maps;