import React, {useState} from 'react';
import {ButtonNew} from './Components/ButtonNew';
import {InputValue} from './Components/InputValue';
import {useAppSelector} from './store/hooks/hooks';
import {WinCount} from './Components/winCount';
import {useAction} from './store/hooks/useAction';

const CounterReduxToolKit = () => {

    const {startCount, maxCount, count} = useAppSelector((state) => state.counter)
    const {incrMaxCount, incrStartCount, resetCount, increment} = useAction()

    let [disableMax, setDisableMax] = useState<boolean>(true);

    const startValue = (value: number) => {
        Number.isInteger(value) &&
        incrStartCount(value)
    }

    const maxValue = (value: number) => {
        Number.isInteger(value) &&
        incrMaxCount(value)
    }

    const setUpCount = () => {
        setDisableMax(true)
    }

    const incrementBtn = () => {
        count < maxCount && increment()
    }
    const reset = () => {
        resetCount()
    }

    const inputMin = (trust: boolean) => {
        setDisableMax(!trust)
    }


    let tryCount = 'enter values and press set';
    let placeCss: string = 'number_enter'
    let errorCss: string = 'input'
    let offInc: boolean = (count === maxCount) && !disableMax
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
                        onClick={incrementBtn}
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
                        inputFocus={inputMin}
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
};

export default CounterReduxToolKit;