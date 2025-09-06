import React from 'react'
import Footer from '../components/Footer'
import VimalMishra from '../assets/images/VimalMishra.jpeg'
import dipesh from '../assets/images/dipesh.jpg'
import Aman_Chaudhary from '../assets/images/Aman_Chaudhary.jpg'
import Rajesh from '../assets/images/Rajesh Singh.jpg'
import Paras from '../assets/images/Paras.jpeg'
import Devesh from '../assets/images/Devesh.jpeg'


const InfoPage = () => {
    return (
        <>
            <div className="main_page_container">


                <div className="para_content">


                    <h1>About the India Hydrological Outlook</h1>
                    <p>
                        Hydrologic Outlook of India provides water outlook for India,
                        covering the current month, the past four months, and a one-month
                        forecast. The outlook is generated using observational data and an
                        extended-range forecasting system for meteorological variables,
                        combined with advanced hydrological modeling tools. These tools
                        analyze relative changes and predict water availability across
                        various regions, offering valuable insights into hydrological situation
                        in India. Developed by the Water and Climate Lab at IIT Gandhinagar,
                        this outlook aims to support water resource management, planning,
                        and decision-making by offering reliable information on rainfall,
                        temperature, soil moisture, runoff, and streamflow patterns across
                        different timescales.
                    </p>


                    <h1>Datasets</h1>
                    <p>
                        The India Hydrological Outlook is made possible through the
                        valuable cooperation of numerous data providers, whose
                        contributions are gratefully acknowledged. Contemporary daily
                        observations and extended range forecast data are supplied by the
                        India Meteorological Department (IMD) <a href='https://www.imdpune.gov.in/cmpg/Griddata/Rainfall_25_Bin.html' target='_blank' rel="noreferrer noopener"> https://www.imdpune.gov.in/cmpg/Griddata/Rainfall_25_Bin.html</a>. Model is calibrated and
                        validated using the streamflow from India-Water Information
                        System (India-WRIS) <a href='https://indiawris.gov.in/wris/#/RiverMonitoring' target='_blank' rel="noreferrer noopener">https://indiawris.gov.in/wris/#/RiverMonitoring</a>.
                        These datasets are used for initializing hydrological models and
                        generating reliable outlook information through statistical analysis
                        of historical analogues.
                    </p>


                    <h1>Hydrological Model</h1>
                    <p>
                        The India Hydrological Outlook utilizes the Variable Infiltration
                        Capacity (VIC) model, a large-scale, semi-distributed hydrological
                        model that computes water and energy budgets for each grid. The
                        VIC model captures sub-grid variability in vegetation and elevation,
                        providing a more accurate representation of hydrological processes
                        at a regional scale. VIC model simulations are performed at a daily
                        temporal resolution to provide accurate hydrological forecasts and
                        enhance water resource management across India.
                    </p>


                    <h1>Disclaimer and Liability</h1>
                    <p>
                        The India Hydrological Outlook aims to ensure that all content provided
                        is accurate and aligns with the current scientific understanding.
                        However, the science underlying the meteorological and hydrological
                        forecasts, as well as climate projections, is continuously evolving. As
                        such, any forecast or prediction included in the content should not be
                        regarded as a definitive statement of fact. To the fullest extent
                        permitted by applicable law, the India Hydrological Outlook disclaims
                        all warranties or representations, whether express or implied, regarding
                        the content. Your use of the content is entirely at your own risk, and we
                        make no guarantees that the content is error-free or suitable for your
                        specific needs.
                    </p>


                    {/* <h1>Observed data</h1>
                    <p>
                        Observed precipitation and maximum & minimum temperatures for the 1951-2022 period at 0.25°were obtained from the India Meteorological Department (IMD) [Pai et al., 2015; Srivastava et al., 2009]. A gridded precipitation dataset has been developed using observations from more than 6500 rain gauges located across India. The daily gridded temperature dataset was developed using station-based observations from more than 300 stations located across India (Srivastava et al., 2009).
                    </p>


                    <h1>Forecasted data</h1>
                    <p>
                        Recently, with the efforts from the Ministry of Earth Sciences (MoES), operational implementation of coupled model with a suite of models from CFSv2 coupled model has been implemented in IMD during July 2016. This dynamical prediction system developed at IITM has been transferred to IMD and the same has been implemented by IMD for generating operational Extended Range Forecast products to different users. This suite of models at different resolutions with atmospheric and oceanic Initial conditions obtained from NCMRWF and INCOIS assimilation system respectively are (i) CFSv2 at T382 (≈ 38 km) (ii) CFSv2 at T126 (≈ 100 km) (iii) GFSbc (bias corrected SST from CFSv2) at T382 and (iv) GFSbc at T126.
                        <br />
                        <br />

                        The operational suite is ported in ADITYA HPCS at IITM Pune for day-to-day operational run. The Multi-model ensemble (MME) out of the above 4 suite of models are run operationally for 32 days based on every Wednesday initial condition with 4 ensemble members (one control and 3 perturbed) each for CFSv2T382, CFSv2T126, GFSbcT382 and GFSbcT126. The same suites of model are also run on hindcast mode for 15 years (2003-2017). The average ensemble forecast anomaly of all the 4 set of model runs of 4 members each is calculated by subtracting corresponding 15-years model hindcast climatology.
                        <br />
                        <br />


                        For the preparation of mean and anomaly forecast on every Thursday, which is valid for 4 weeks for days 2-8 (week1; Friday to Thursday), days 09-15 (week2; Friday to Thursday), days 16-22 (week3; Friday to Thursday) and days 23-29 (week4; Friday to Thursday).
                    </p>

                    <h1>Hydrologic model (VIC model)</h1>
                    <p>
                        Land surface variables (soil moisture and runoff) were simulated using a well calibrated Variable Infiltration Capacity Model (VIC). The VIC model has been widely used in India for hydrologic assessment (Mishra et al., 2014; Mishra et al. 2018; Shah and Mishra, 2016; Shah et al. 2017; Shah and Mishra, 2016). For more information on the VIC model, please visit <a href=' https://vic.readthedocs.io/en/master/#variable-infiltration-capacity-vic-macroscale-hydrologic-model' target='_blank'> https://vic.readthedocs.io/en/master/#variable-infiltration-capacity-vic-macroscale-hydrologic-model
                            </a>.
                    </p> */}




                    <h1>Contact US</h1>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="contact-image">
                                <img src={VimalMishra} alt="Vimal Mishra" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-image-caption">
                                <p>
                                    <a href="https://scholar.google.co.in/citations?user=wq7CgpUAAAAJ&hl=en" target="_blank" rel="noreferrer noopener"> Prof. Vimal Mishra <br/>(Professor) </a><br />
                                    Department of Civil Engineering, IIT Gandhinagar<br />
                                    email: vmishra@iitgn.ac.in<br/>
                                    {/* Office: AB6/330, IIT Gandhinagar */}
                                </p>
                            </div>
                        </div>







                        <div className="col-md-3">
                            <div className="contact-image">
                                <img src={Rajesh} alt="Rajesh Singh" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-image-caption">
                                <p>
                                    <a href="https://vmishra.people.iitgn.ac.in/water&climate/#/people/Rajesh%20Singh" target="_blank" rel="noreferrer noopener">
                                        Dr. Rajesh Singh <br/>(Post Doctorate Fellow)</a><br />
                                    Department of Civil Engineering, IIT Gandhinagar<br/>
                                    email: rajesh.singh@iitgn.ac.in<br/>
                                    {/* Office: AB4/326, IIT Gandhinagar */}
                                </p>
                            </div>
                        </div>


                        <div className="col-md-3">
                                <div className="contact-image">
                                    <img src={Paras} alt="Paras" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="contact-image-caption">
                                    <p>
                                        <a href="https://scholar.google.com/citations?user=oc7ooUkAAAAJ&hl=en" target="_blank" rel="noreferrer noopener">
                                            Paras Sharma</a><br />
                                        PhD Research Scholar, Civil Engineering <br />
                                        IIT Gandhinagar<br />
                                        email: paras.sharma@iitgn.ac.in


                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="contact-image">
                                    <img src={Devesh} alt="Devesh" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="contact-image-caption">
                                    <p>
                                        <a href="https://vmishra.people.iitgn.ac.in/water&climate/#/people/Devesh%20Mani" target="_blank" rel="noreferrer noopener">
                                            Devesh Mani</a><br />
                                        PhD Research Scholar, Civil Engineering <br />
                                        IIT Gandhinagar<br />
                                        email: 24350007@iitgn.ac.in
                                    </p>
                                </div>
                            </div>




                        {/* <div className="col-md-3">
                                <div className="contact-image">
                                    <img src={Aman_Chaudhary} alt="Aman Chaudhary" />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="contact-image-caption">
                                    <p>
                                        <a href="https://www.linkedin.com/in/amanchaudhary-com/" target="_blank" rel="noreferrer noopener">
                                            Aman Chaudhary </a><br />
                                        WebGIS Developer,<br />
                                        B.Tech, Civil Engineering, IIT Gandhinagar<br />
                                        email: aman.chaudhary@iitgn.ac.in
                                    </p>
                                </div>
                            </div> */}



                    </div>

                </div>
            </div>







            <Footer />
        </>

    )
}

export default InfoPage