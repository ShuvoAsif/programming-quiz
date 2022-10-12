import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Qustion.css'
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Qustion = ({ qustion }) => {
    const ansHandeler = () => {
        alert(qustion.correctAnswer);
    }

    const resultHandeler = (no) => {
        if (qustion.options[no] === qustion.correctAnswer) {
            alert('Your result is correct');
        }
        else {
            alert('Your result is wrong');
        }

    }

    return (
        <div className='qustion'>
            <h1>{ }</h1>
            <div className='qus'>
                <h3>{qustion.question}</h3>
                <FontAwesomeIcon onClick={() => ansHandeler()} icon={faEye}></FontAwesomeIcon>
            </div>
            <button onClick={() => resultHandeler(0)}>{qustion.options[0]}</button>
            <button onClick={() => resultHandeler(1)}>{qustion.options[1]}</button>
            <button onClick={() => resultHandeler(2)}>{qustion.options[2]}</button>
            <button onClick={() => resultHandeler(3)}>{qustion.options[3]}</button>
        </div>
    );
};

export default Qustion;