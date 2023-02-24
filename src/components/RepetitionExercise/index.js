import { useState } from "react";

export default function RepetitionExercise(props) {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div>
            <h2 className="exercise--title">{props.name}</h2>
            <img className="exercise--img" src={props.exerciseImg} alt="" />
            <div className="">
                <div className="exercise--reps">
                    <h3>reps: {count}</h3>
                    <button className="exercise--btn red" onClick={incrementCount}>+</button>
                </div>
                <button className="exercise--btn purple" onClick={resetCount}>Reset</button>
                <button className="exercise--btn pink" onClick={props.returnToMenu}>Return</button>
            </div>
        </div>
    )
}