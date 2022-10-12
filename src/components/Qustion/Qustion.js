import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Qustion.css'
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Qustion = ({ qustion }) => {
    return (
        <div className='qustion'>
            <div className='qus'>
                <h3>{qustion.question}</h3>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </div>
            <button>{qustion.options[0]}</button>
            <button>{qustion.options[1]}</button>
            <button>{qustion.options[2]}</button>
            <button>{qustion.options[3]}</button>
        </div>
    );
};

export default Qustion;