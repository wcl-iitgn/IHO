import React, { useState } from 'react'
import { mapsLinks } from '../assets/mapsLinks'
import { IoIosInformationCircle } from "react-icons/io";
import DateFunction from '../components/DateFunction';

const TempPage = () => {
    const selectedMap = mapsLinks.find((item) => item.section === "Surface Air Temperature")

    return (
        <>
            <div className='dasboard_page_container'>
                <div className='main_dashboard'>
                    {/* <div className='left_panel'>
                        <div className="accordion" id="accordionExample">


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="infoheading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#info" aria-expanded="true" aria-controls="info">
                                        Info&nbsp;<IoIosInformationCircle />
                                    </button>
                                </h2>
                                <div id="info" className="accordion-collapse collapse show" aria-labelledby="infoheading">
                                    <div className="accordion-body">
                                        <p>
                                            These maps are based on Grid-to-Grid (G2G) daily temperature observations and extended range forecast, expressed as an anomaly from the
                                            historical (1951 to present) monthly mean. This temperature anomaly map highlights regions with high and low temperature than usual, helping to
                                            pinpoint areas at risk of heat waves and cold spells. Low-temperature anomalies (cold spells) paired with heavy rainfall and high relative wetness
                                            may indicate a potential region for intense flooding in the coming days/weeks. Areas with higher temperature anomalies (warm periods) paired with
                                            low or minimal rainfall and low relative wetness may be at risk of intense (or prolonged) drought conditions.
                                        </p>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div> */}
                    <div className='right_panel'>
                        <div className='map_heading'>
                            <h1>{selectedMap.label}</h1>
                            <p>Based on daily observation till <DateFunction /></p>
                        </div>

                        <div className='plot_img'>
                            <img src={selectedMap.url} alt='Hydrologic Outlook of India' />

                        </div>

                    </div>

                </div>
            </div>

        </>

    )
}

export default TempPage