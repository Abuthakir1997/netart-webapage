import React from 'react';
import Radium from 'radium';
import '../FooterBottom/FooterBottom.css';

const footerbottom = () => {
    return (
        <div className="footer-bottom">
            <div className="row m-0 p-0">
                <div className="col-xl-4 col-md-12">
                    <ul>
                        <li><i class="icofont-phone-circle"></i><a href="#">Tollfree-1800 200 1234</a></li>
                    </ul>
                </div>
                <div className="col-xl-4 col-md-12">
                    <ul>
                        <li><i class="icofont-facebook"></i><a href="#">www.facebook.com/cripumps</a></li>
                    </ul>
                </div>
                <div className="col-xl-4 col-md-12">
                    <ul>
                        <li><i class="icofont-world"></i><a href="#">www.crigroups.com</a></li>
                    </ul>
                </div>


            </div>

        </div>
    );
}

export default Radium(footerbottom);