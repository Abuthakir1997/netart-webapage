import React from 'react';
import Radium from 'radium';
import '../FooterBottom/FooterBottom.css';

const footerBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="row m-0 p-0">
                <div className="col-xl-4 col-md-12">
                    <ul>
                        <li><i class="icofont-phone-circle"></i><a href="/http://www.google.com" target="_blank">Tollfree-1800 200 1234</a></li>
                    </ul>
                </div>
                <div className="col-xl-4 col-md-12">
                    <ul>
                        <li><i class="icofont-facebook"></i><a href="http://www.facebook.com/cripumps" target="_blank">www.facebook.com/cripumps</a></li>
                    </ul>
                </div>
                <div className="col-xl-4 col-md-12">
                    <ul>
                        <li><i class="icofont-world"></i><a href="http://www.crigroups.com/" target="_blank">www.crigroups.com</a></li>
                    </ul>
                </div>


            </div>

        </div>
    );
}

export default Radium(footerBottom);