import React  from 'react';
import './InputCss.css';


type WinCountType = {
    nameValue: string;
    setValue: (value: string) => void;
    inputFocus: (trust: boolean) => void;
    value: string
};

export const InputValue: React.FC<WinCountType> = ({nameValue, setValue, inputFocus, value}) => {

    // const maxCountStyle: string = (offInc ? 'red number' : 'number')



    return (
        <div className="place">
            <span>{nameValue}</span>
            <input
                type="number"
                value={value}
                onChange={(e)=>setValue(e.currentTarget.value)}
                onFocus={e => inputFocus(e.isTrusted)}
                disabled={false}
            />

        </div>
    );
};

