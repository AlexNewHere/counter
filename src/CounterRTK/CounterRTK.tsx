import React, {useState} from 'react';
import {ButtonNew} from "./Components/ButtonNew";
import {InputValue} from "./Components/InputValue";
import {RootState} from "./store/store";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {WinCount} from "./Components/winCount";
import {increment, resetCount} from "./store/counterSlice";

const CounterRtk = () => {

    const {startCount, maxCount, count} = useAppSelector((state: RootState) => state.counter)
    console.log(startCount, maxCount, count)
    const dispatch = useAppDispatch()

      // let [valueMax, setValueMax] = useState<string>(maxCount);

    let [disableMax, setDisableMax] = useState<boolean>(true);


    const startValue = (value: number) => {
        // dispatch(value)
    }

    const maxValue = (value: number) => {
        // setMaxCount(value);
    }

    const setUpCount = () => {
        // setCount(startCount);
        // setValueMax(maxCount);
        // setDisableMax(true)
    }

    const incrementBtn = () => {
        count < maxCount && dispatch(increment())
    }
    const reset = () => {
       dispatch(resetCount())
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
};

export default CounterRtk;