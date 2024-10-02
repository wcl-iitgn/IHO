import React, { useState } from 'react'
import { MapContainer, GeoJSON, ImageOverlay, LayersControl } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import { setDragging, setInitialMapZoom } from '../functions/mapFunctions';
import BaseMap from '../components/BaseMap';
import { mapsLinks } from "../assets/mapsLinks"

import raster_map from "../assets/pcp_7.gif"
import indiastates from '../assets/data/indiaStates.json';
import indiaBasin from '../assets/data/indiaBasin.json';
import indiaDistrict from '../assets/data/indiaDistrict.json';
import indiaRivers from '../assets/data/indiaRivers.json';
import DateFunction from '../components/DateFunction';

const baseLayer = [
    {
        "name": "States Boundary",
        "geoJsonData": indiastates,
        "style": {
            fillColor: 'none',
            weight: 2,
            color: 'black',
            interactive: false
        },
        "hoverFeature": true
    },
    {
        "name": "Districts Boundary",
        "geoJsonData": indiaDistrict,
        "style": {
            weight: 0.2,
            fillColor: "black",
            fillOpacity: 0.00001,
            // dashArray: 3,
            color: 'black'
        },
        "hoverFeature": false
    },
    {
        "name": "River Basins Boundary",
        "geoJsonData": indiaBasin,
        "style": {
            fillColor: 'none',
            weight: 2,
            color: 'red',
            interactive: false
        },
        "hoverFeature": false
    },
    {
        "name": "Rivers",
        "geoJsonData": indiaRivers,
        "style": {
            fillColor: 'none',
            weight: 2,
            color: 'blue',
            interactive: false
        },
        "hoverFeature": false
    },

]





const ObservedDataPage = () => {
    const [selectedMap, setSelectedMap] = useState(mapsLinks[0])
    const [selectedLayers, setSelectedLayers] = useState([baseLayer[0], baseLayer[1]]);

    const handleMapSelect = (item) => {
        setSelectedMap(item);
    };

    const handleLayerToggle = (layer, isChecked) => {
        if (isChecked) {
            setSelectedLayers(prev => [...prev, layer]);  // Add the selected layer
        } else {
            setSelectedLayers(prev => prev.filter(l => l.name !== layer.name));  // Remove the layer
        }
    };



    function DistrictOnEachfeature(feature, layer) {
        // Pre-bind the tooltip with a default message or properties
        let popupContent = feature.properties?.District ? `${feature.properties.District}, ${feature.properties.STATE}` : 'No Info Available';
        layer.bindTooltip(popupContent, { sticky: true });

        layer.on('mouseover', function () {
            layer.openTooltip();
            layer.setStyle({
                fillColor: '#eb4034',
                weight: 1,
                color: '#eb4034',
                fillOpacity: 0.7,
            });
        });

        layer.on('mouseout', function () {
            layer.closeTooltip();
            layer.setStyle({
                fillColor: "black",
                fillOpacity: 0.00001,
                weight: 0.2,
                color: 'black',
            });
        });
    }





    return (
        <>

            <div className='dasboard_page_container'>

                <div className='main_dashboard'>
                    <div className='left_panel'>



                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                                        Base Layers
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        {baseLayer.map((layer, index) => (
                                            <div className="form-check" key={index}>

                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        checked={selectedLayers.some(selectedLayer => selectedLayer.name === layer.name)}
                                                        onChange={(e) => handleLayerToggle(layer, e.target.checked)}
                                                    />
                                                    {layer.name}
                                                </label>
                                            </div>
                                        ))}


                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Meteorological conditions
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                                    <div className="accordion-body">
                                        <strong>Observed meteorological conditions</strong>
                                        {mapsLinks.filter(item => item.section === "Observed_meteorological_conditions").map((item, index) => (
                                            <div className="form-check" key={index}>

                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        checked={selectedMap.label === item.label}
                                                        onChange={() => handleMapSelect(item)}
                                                    />
                                                    {item.label}
                                                </label>
                                            </div>
                                        )

                                        )}


                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        Hydrological conditions
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" >
                                    <div className="accordion-body">
                                        <strong>Observed hydrological conditions</strong>

                                        {mapsLinks.filter(item => item.section === "Observed_hydrological_conditions").map((item, index) => (
                                            <div className="form-check" key={index}>

                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        checked={selectedMap.label === item.label}
                                                        onChange={() => handleMapSelect(item)}
                                                    />

                                                    {item.label}
                                                </label>
                                            </div>
                                        )

                                        )}

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='map_heading_mobile'>
                        <h1>{selectedMap.label}</h1>
                    </div>
                    <div className='right_panel'>



                        <MapContainer
                            fullscreenControl={true}


                            center={[23, 84]}
                            style={{ width: '100%', height: "100%", backgroundColor: 'white', margin: 'auto', border: "1px solid grey" }}
                            zoom={setInitialMapZoom()}
                            // maxBounds={maxBounds}
                            // maxZoom={8}
                            maxBounds={[[8, 98], [38, 68]]}
                            minZoom={setInitialMapZoom()}
                            keyboard={false}
                            dragging={setDragging()}
                            // attributionControl={false}
                            // scrollWheelZoom={false}
                            doubleClickZoom={false}
                        >

                            {selectedLayers && selectedLayers.length > 0 &&
                                selectedLayers.map((layer, index) => (
                                    <GeoJSON
                                        data={layer.geoJsonData.features}
                                        style={layer.style}
                                        key={index + layer.name}
                                        onEachFeature={DistrictOnEachfeature}  // Add hover functionality only to layers with `hoverFeature`
                                    />
                                ))}


                            <div className='date_container'>
                                {<DateFunction days="observed_start" />} - {<DateFunction days="observed_end" />}

                            </div>
                            {selectedMap &&
                                <>
                                    <ImageOverlay
                                        // url={raster_map}
                                        url={selectedMap.url}
                                        fitBounds={true}
                                        bounds={[[5.9484095274736717, 98.3478180095000880], [37.9663826133689355, 60.8240580598229599]]}
                                        opacity={1}
                                        // attribution={layer.attribution}
                                        key={selectedMap.name}
                                    />

                                    <div className={selectedMap.section === "Droughts" ? "legend-panel-desktop drouhght_l" : "legend-panel-desktop other_l"} >
                                        <p>{selectedMap.label}</p>
                                        <img src={selectedMap.legend} alt="legend" />
                                    </div>

                                    <div className='map_heading_desktop'>
                                        <h1>{selectedMap.label}</h1>
                                    </div>

                                </>



                            }




                            <BaseMap />









                        </MapContainer>



                    </div>
                </div>
            </div>

        </>

    )
}

export default ObservedDataPage