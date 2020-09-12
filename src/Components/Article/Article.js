import React from 'react';
import './Article.css';


const article = () => {
    return (
        <div className="Article">
            <div className="row m-xl-0 m-md-0">
                <div className="container">
                    <div className="col-12">
                        <p >INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                        <img src={require('../Article/3.png')} alt="Installation instruments"></img>

                    </div>
                    <hr className="my-5 text-center"></hr>
                </div>


            </div>


        </div>
    )
}

export default article;