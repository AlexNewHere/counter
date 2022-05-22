import React  from 'react';
import './InputCss.css';

type WinCountType = {
    nameValue: string;
    setValue: (value: string) => void;
    inputFocus: (trust: boolean) => void;
    value: string
    errorCss: any
};

export const InputValue: React.FC<WinCountType> = (
    {nameValue, setValue, inputFocus,   errorCss, value}) =>
{

    return (
        <div className='place'>
            <span className='span'>{nameValue}</span>
            <input
                className={errorCss}
                type="number"
                value={value}
                onChange={(e)=>setValue(e.currentTarget.value)}
                onFocus={(e) => inputFocus(e.isTrusted)}
            />
        </div>
    );
};

