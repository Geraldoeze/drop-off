import React, {  useRef, useState, useEffect }from 'react'
import './Map.css'
import mapboxgl from 'mapbox-gl'



mapboxgl.accessToken="pk.eyJ1IjoiZ2FsbGFudDcwMSIsImEiOiJja3V2d2Z1azYwMGpzMm5xd3MyODhxajE2In0.Kxtv3Cg8rlL_QZYJKfXMxg"

//Was unable to pass the new data to the map component

const Maps = ( {demo} ) => {
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
       
        
         //Add navigation control (+/- buttons)
         map.addControl(new mapboxgl.NavigationControl(), "top-left");

        //clean up on umount
        return () => map.remove();
    
    
        
    },[]);
        
    // const video = () => {
    //     setLng(demo.map(num => num[0]))
    //     setLat(demo.map(num => num[1]))
    // }
        
    return (  
        <div>
            <div className="mapps" ref={mapContainerRef} >

            </div>

        </div>
    );
}
 
export default Maps;