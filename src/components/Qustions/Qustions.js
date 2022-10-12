import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qustion from '../Qustion/Qustion';
import './Qustions.css'
const Qustions = () => {

    const data = useLoaderData();
    const qustions = data.data.questions;
    console.log(qustions)
    return (
        <div className='qustion'>
            {
                qustions.map(qustion => (
                    <Qustion
                        key={qustion.id}
                        qustion={qustion}
                    ></Qustion>
                ))
            }
        </div>
    );
};

export default Qustions;