import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css';

const Statistics = () => {
    const data = useLoaderData().data;

    return (
        <div className='chart'>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" barSize={20} fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;