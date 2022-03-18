import React, { useState } from 'react';

import Quiz from './quiz.json';
import './styles.css';

export const Task3 = () => {
    const [input, setInput] = useState('')
    const [nextStep, setNextStep] = useState('1');
    const [result, setResult] = useState(false);
    const [isDisabled, setDisabled] = useState(true);

    const onInputChanged = (e) => {
        setInput(e.currentTarget.value)
        setDisabled(false)
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (input === "100" || input === "101") {
            setResult(true)
        }
        setNextStep(input)
        setDisabled(true)
    }
    return (
        <div className='container'>
            <h1>Опросник</h1>
            {result
                ? (<p>Спасибо за прохождение опросника</p>) : (
                    <form onSubmit={handleClick}>
                        <div id="content">
                            <div className="pattern">
                                <h4 className="question">{Quiz[nextStep].name}</h4>
                                <div className="answers">
                                    {Quiz[nextStep].answers.map((index, key) => (
                                        <div className="radio" key={key}>
                                            <input
                                                type="radio"
                                                name={`value-${Quiz[nextStep].id}`}
                                                value={index.idNext}
                                                checked={input === index.idNext}
                                                onChange={onInputChanged}
                                            />
                                            {index.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isDisabled}
                        >
                            Ответить
                        </button>
                    </form>)
                }
        </div>
    )
}