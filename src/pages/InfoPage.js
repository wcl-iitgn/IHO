import React from 'react'
import Footer from '../components/Footer'

const InfoPage = () => {
    return (
        <>
            <div className="main_page_container">
                <div className="para_content">
                    <h1>Observed data</h1>
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
                    </p>

                </div>




            </div>

            <Footer />
        </>

    )
}

export default InfoPage