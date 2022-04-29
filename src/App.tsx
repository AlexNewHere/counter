import React, {useEffect, useState} from 'react';
import './App.css';
import {ButtonNew} from './ButtonNew/ButtonNew';
import {WinCount} from './winCount';
import {InputValue} from './SetValue/InputValue';

export const App = () => {

    let [startCount, setStartCount] = useState<string>(localStorage.getItem('startCount') || '0');
    let [maxCount, setMaxCount] = useState<string>(localStorage.getItem('maxCount') || '5');

    let [count, setCount] = useState<string>(startCount);
    let [valueMax, setValueMax] = useState<string>(maxCount);

    let [disableMax, setDisableMax] = useState<boolean>(true);

    useEffect(() => {
        localStorage.setItem('startCount', startCount);
        localStorage.setItem('maxCount', maxCount);
    }, [startCount, maxCount]);

    const startValue = (value: string) => {
        setStartCount(value)
    }

    const maxValue = (value: string) => {
        setMaxCount(value);
    }

    const setUpCount = () => {
        setCount(startCount);
        setValueMax(maxCount);
        setDisableMax(true)
    }

    const increment = () => {
        (Number(count) <= Number(maxCount)) && setCount((Number(count) + 1).toString());
    }

    const reset = () => {
        setCount(startCount);
    }

    const inputMin = (trust: boolean) => {
        setDisableMax(!trust)
    }
    const inputMax = (trust: boolean) => {
        setDisableMax(!trust)
    }

    let tryCount = 'enter values and press set';
    let placeCss: string = 'number_enter'
    let errorCss: string = 'input'
    let offInc: boolean = (count === valueMax) || !disableMax
    let onReset: boolean = (count === startCount) || !disableMax

    if ((Number(startCount) < 0) || (Number(maxCount) <= Number(startCount))) {
        tryCount = 'Incorrect values!!!';
        offInc = true;
        onReset = true;
        placeCss = 'number_enter_error'
        errorCss = 'input place_error'
        disableMax = true;
    }

    return (

        <div className="app">
            <div className="counter">
                {(disableMax && !offInc) ?
                    <WinCount winCount={count} offInc={offInc}/> :
                    <div className={placeCss}>{tryCount}</div>}

                <div className="bgButton">
                    <ButtonNew
                        nameButton={'inc'}
                        onClick={increment}
                        onOff={offInc}
                    />

                    <ButtonNew
                        nameButton={'reset'}
                        onClick={reset}
                        onOff={onReset}
                    />
                </div>
            </div>

            <div className="counter">
                <div className="placeValue">

                    <InputValue
                        nameValue={'max value:'}
                        setValue={maxValue}
                        value={maxCount}
                        inputFocus={inputMax}
                        errorCss={errorCss}
                    />

                    <InputValue
                        nameValue={'min value:'}
                        setValue={startValue}
                        value={startCount}
                        inputFocus={inputMin}
                        errorCss={errorCss}
                    />

                </div>
                <div className="bgButton">

                    <ButtonNew
                        onClick={setUpCount}
                        onOff={disableMax}
                        nameButton={'set'}
                    />

                </div>
            </div>
        </div>
    );
}


