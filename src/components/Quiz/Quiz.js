import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    return (
        <div className='quiz'>
            <img src={quiz.logo} alt="" />
            <div className='quiz-info'>
                <h5 className='quiz-name'>{quiz.name}</h5>
            </div>

            <button className='btn-quiz'>
                <p className='btn-text'>Take A Quiz</p>
            </button>
        </div>
    );
};

export default Quiz;