import React from 'react';
import '../Header/Header.css'

const header = () => {
    return (
        <div className='header'>
            <img src={require('./logo.png')} alt="logo"></img>
        </div>

    )


};

export default header;