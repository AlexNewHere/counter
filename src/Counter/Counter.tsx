import React, { useEffect, useState} from 'react';
import '../App.css';
import {ButtonNew} from './Components/ButtonNew';
import {WinCount} from './Components/winCount';
import {InputValue} from './Components/InputValue';

export const Counter = () => {

    const loadState = (title: string): number => {
        const serializedState = localStorage.getItem(title);
        if (serializedState === null)
        {
            return 0;
        }
        return JSON.parse(serializedState);
    }

    let [startCount, setStartCount] = useState<number>(loadState('startCount'));
    let [maxCount, setMaxCount] = useState<number>(loadState('maxCount'));

    let [count, setCount] = useState<number>(startCount);
    let [valueMax, setValueMax] = useState<number>(maxCount);

    let [disableMax, setDisableMax] = useState<boolean>(true);

    useEffect(() => {
        localStorage.setItem('startCount', JSON.stringify(startCount));
        localStorage.setItem('maxCount', JSON.stringify(maxCount));
    }, [startCount, maxCount]);

    const startValue = (value: number) => {
        Number.isInteger(value) && setStartCount(value)
    }

    const maxValue = (value: number) => {
        Number.isInteger(value) && setMaxCount(value);
    }

    const setUpCount = () => {
        setCount(startCount);
        setValueMax(maxCount);
        setDisableMax(true)
    }

    const increment = () => {
        count < maxCount && setCount(count + 1);
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

    let offInc: boolean = (count === valueMax) && !disableMax
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


