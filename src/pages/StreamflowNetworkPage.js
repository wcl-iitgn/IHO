import React, { useState } from 'react'
import { mapsLinks } from '../assets/mapsLinks'
import { IoIosInformationCircle } from "react-icons/io";
import DateFunction from '../components/DateFunction';

const StreamflowNetworkPage = () => {
    const selectedMap = mapsLinks.find((item) => item.section === "Streamflow at Stream Network")

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
                                            These maps are based on Grid-to-Grid (G2G) daily simulated streamflow at each stream network, expressed as percentile for monthly mean
                                            streamflow from 1951 to present. This streamflow percentile map highlights rivers with high and low flow, helping to pinpoint areas at risk of extreme
                                            weather impacts. High rainfall percentiles and high relative wetness in next month paired with current high streamflow percentiles may indicate a
                                            potential region for flooding in the coming days/weeks. Areas with low precipitation percentiles and low relative wetness in next month and low
                                            streamflow currently may be at risk of prolonged hydrological drought conditions.
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

export default StreamflowNetworkPage