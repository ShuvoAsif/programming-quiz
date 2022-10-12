import './Quiz.css';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    return (
        <div>
            <div className='quiz'>
                <img src={quiz.logo} alt="" />
                <div className='quiz-info'>
                    <h5 className='quiz-name'>{quiz.name}</h5>
                </div>
                <Link to={`/${quiz.id}`}>
                    <button className='btn-quiz'>
                        <p className='btn-text'>Take A Quiz</p>
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Quiz;