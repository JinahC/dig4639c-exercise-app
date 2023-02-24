import { useState, useEffect, useCallback } from "react"

export default function DurationExercise(props) {
    const [timer, setTimer] = useState(0);
    const [curSeconds, setSeconds] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);

    useEffect(() => {
        if (timerStarted) {
            let newTimer = setInterval(() => setSeconds(prevSeconds => prevSeconds + 1), 1000);
            setTimer(newTimer);
            return () => clearInterval(newTimer);
        }
    }, [])

    let click = useCallback(() => {
        if (timerStarted) { // stopping timer
            clearInterval(timer);
            setTimerStarted(false);
            setSeconds(0);
        }
        else { // starting timer
            setTimerStarted(true);
            let timer = setInterval(() => setSeconds(prevSeconds => prevSeconds + 1), 1000);
            setTimer(timer); 
        }
    }, [timerStarted, timer])
    
    return (
        <div>
            <h2 className="exercise--title">{props.name}</h2>
            <img className="exercise--img" src={props.exerciseImg} alt="" />
            <h3 className="exercise--timer">
                {`${(Math.floor(curSeconds / 60)).toString().padStart(2, "0")}:${(curSeconds % 60).toString().padStart(2, "0")}`}
            </h3>
            <button className="exercise--btn purple" onClick={click}>{timerStarted ? "Reset" : "Start"}</button>
            <button className="exercise--btn pink" onClick={props.returnToMenu}>Return</button>
        </div>
    )
}