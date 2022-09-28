import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
             <p><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> Programming Club</p>
             <p><small>Select Today's Exercise</small></p>
        </div>
    );
};

export default Header;