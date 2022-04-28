import React, {useState} from 'react';
import './App.css';
import {ButtonNew} from './ButtonNew/ButtonNew';
import {WinCount} from './winCount';
import {InputValue} from './SetValue/InputValue';

export const App = () => {


    let [startCount, setStartCount] = useState<string>('0');
    let [maxCount, setMaxCount] = useState<string>('5');

    const startValue = (value: string) => {
        setStartCount(value);
    }
    const maxValue = (value: string) => {
        setMaxCount(value);

    }

    let [count, setCount] = useState<string>(startCount);
    let [valueMax, setValueMax] = useState<string>(maxCount);

    const setUpCount = () => {
        setCount(startCount);
        setValueMax(maxCount);
        setDisableMax(true);
    }

    const increment = () => {
        (count <= maxCount) && setCount((+count + 1).toString());
    }

    const reset = () => {
        setCount(startCount);
    }

    let [disableMax, setDisableMax] = useState<boolean>(true);
    const inputMin = (trust: boolean) => {
        setDisableMax(!trust)
    }
    const inputMax = (trust: boolean) => {
        setDisableMax(!trust)
    }

    const offInc: boolean = (count === valueMax) || !disableMax
    const onReset: boolean = (count === startCount)

    const ckeckWin: string = disableMax? count : "enter value";


    return (

        <div className="app">
            <div className="counter">

                <WinCount
                    winCount={ckeckWin}
                    offInc={offInc}
                />

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
                    />

                    <InputValue
                        nameValue={'min value:'}
                        setValue={startValue}
                        value={startCount}
                        inputFocus={inputMin}
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


