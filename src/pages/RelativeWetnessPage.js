import React, { useState } from 'react'
import { mapsLinks } from '../assets/mapsLinks'
import { IoIosInformationCircle } from "react-icons/io";
import DateFunction from '../components/DateFunction';

const RelativeWetnessPage = () => {
    const selectedMap = mapsLinks.find((item) => item.section === "Relative Wetness")

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
                                            These maps are based on Grid-to-Grid (G2G) daily simulated soil moisture, expressed as an anomaly from the historic (1951 to present) monthly
                                            mean. This soil moisture anomaly is presented as relative to historical extremes to highlight the regions with wet or dry, helping to pinpoint areas at
                                            risk of extreme weather impacts. High relative wetness (wetter) in current month paired with high rainfall percentile in next month may indicate a
                                            potential region for flooding in the coming days/weeks. Areas with low relative wetness (drier) in current month and no or minimal predicted rainfall
                                            in next month may be at risk of prolonged drought conditions.
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

export default RelativeWetnessPage