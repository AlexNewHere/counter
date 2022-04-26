import React, {useState} from 'react';
import './App.css';
import {ButtonNew} from './ButtonNew/ButtonNew';
import WinCount from './winCount';

export const App = () => {

    let maxCount: number = 5;
    let startCount: number = 0;

    let [count, setCount] = useState<number>(startCount);

    const increment = () => {
        if (count<=maxCount) setCount(count+1);
    }

    const reset = () => {
        setCount(startCount);
    }

    const offInc: boolean = (count === maxCount)
    const onReset: boolean = (count === startCount)

    return (
        <div className="App">

            <WinCount winCount={count} offInc={offInc} />

            <div className="bgButton">

                <ButtonNew onClick={increment} onOff={offInc} nameButton={'inc'}/>

                <ButtonNew onClick={reset} onOff={onReset} nameButton={'reset'}/>

            </div>
        </div>
    );
}


