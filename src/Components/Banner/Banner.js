import React from 'react';
import '../../Components/general.css';
import '../Banner/Banner.css';
import Radium from 'radium';
const banner = () => {
    return (
        <div className="container-fluid">
            <div className="banner">
                <div className="row m-0">

                    <div className="col-xl-4 col-lg-12 first">
                        <img className="left-image" src={require('../Banner/1.png')} alt="banner"></img>
                    </div>
                    <div className="col-xl-8 col-lg-12 ml-xl-auto second">
                        <p className="heading">C.R.I. PUMPS WINS THE <b></b>NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
 </p>
                        <ul>
                            <li>
                                <p>
                                    C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                                </p>

                            </li>
                            <li>
                                <p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p>
                            </li>
                        </ul>
                        <img className="right-image" src={require('../Banner/2.png')} alt="banner"></img>
                        <p>
                            Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                        </p>
                    </div>

                </div>


            </div>
        </div>
    );

}

export default Radium(banner);