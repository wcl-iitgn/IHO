import React from 'react'
import Footer from '../components/Footer'
import VimalMishra from '../assets/images/VimalMishra.jpeg'
import dipesh from '../assets/images/dipesh.jpg'
import Aman_Chaudhary from '../assets/images/Aman_Chaudhary.jpg'

const ContactUsPage = () => {
    return (
        <>
            <div className="main_page_container">
                <div className="para_content">

                    <div className="contact_page">
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
                                        <a href="https://scholar.google.co.in/citations?user=wq7CgpUAAAAJ&hl=en" target="_blank" rel="noreferrer noopener"> Dr. Vimal Mishra </a><br />
                                        Professor, Civil Engineering <br />IIT Gandhinagar<br />
                                        email: vmishra@iitgn.ac.in
                                    </p>
                                </div>
                            </div>



                            <div className="col-md-3">
                                <div className="contact-image">
                                    <img src={dipesh} alt="Rajesh Singh" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="contact-image-caption">
                                    <p>
                                        <a href="https://vmishra.people.iitgn.ac.in/water&climate/#/people/Dipesh%20Singh%20Chuphal" target="_blank" rel="noreferrer noopener">
                                            Dipesh Singh Chuphal </a><br />
                                        PhD Research Scholar, Civil Engineering, <br />
                                        IIT Gandhinagar<br />
                                        email: dipeshsc@iitgn.ac.in
                                    </p>
                                </div>
                            </div>





                            <div className="col-md-3">
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
                            </div>




                        </div>
                    </div>




                </div>




            </div>

            <Footer />
        </>

    )
}

export default ContactUsPage