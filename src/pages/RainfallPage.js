import React, { useState } from 'react'
import { mapsLinks } from '../assets/mapsLinks'
import { IoIosInformationCircle } from "react-icons/io";
import DateFunction from '../components/DateFunction';

const RainfallPage = () => {
    const selectedMap = mapsLinks.find((item) => item.section === "Rainfall Conditions")

    return (
        <>
            <div className='dasboard_page_container'>
                <div className='main_dashboard'>
                    {/* <div className='left_panel'>
                        <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                                <h2 className="accordion-header" id="summaryheading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#summary" aria-expanded="true" aria-controls="summary">
                                        Summary 
                                    </button>
                                </h2>
                                <div id="summary" className="accordion-collapse collapse show" aria-labelledby="summaryheading">
                                    <div className="accordion-body">
                                        <p>
                                        In October, high to extreme high flows than typical for the time of year for the river reaches, especially in western and southern‌
                                        regions. In November, extemely high to exceptional high flow is predicted in southern India.‌
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="infoheading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#info" aria-expanded="true" aria-controls="info">
                                        Info&nbsp;<IoIosInformationCircle />
                                    </button>
                                </h2>
                                <div id="info" className="accordion-collapse collapse show" aria-labelledby="infoheading">
                                    <div className="accordion-body">
                                        <p>
                                            These maps are based on Grid-to-Grid (G2G) daily rainfall observations and extended range forecast, expressed as percentile for monthly total
                                            rainfall from 1951 to present. This rainfall percentile map highlights regions with rainfall surpluses and deficits, helping to pinpoint areas at risk of
                                            extreme weather impacts. High rainfall percentiles in next month paired with current high relative wetness may indicate a
                                            potential region for flooding in the coming days/weeks. Areas with low precipitation percentiles, particularly those with minimal or no rainfall, may
                                            be at risk of prolonged drought conditions.
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

export default RainfallPage