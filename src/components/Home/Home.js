import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css';
import pic from '../../images/programming.jpg'

const Home = () => {
    const quizs = useLoaderData().data;
    return (
        <div>
            <div>
                <img src={pic} alt="" />
                <h1>Test your knowledge on programming</h1>
            </div>
            <div className='quiz-container'>
                {
                    quizs.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;