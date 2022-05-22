import React from 'react';


type ButtonNewType = {
    onClick: () => void;
    nameButton: string;
    onOff: boolean;
}

export const ButtonNew: React.FC<ButtonNewType> = ({onClick, nameButton, onOff}) => {

    const btnHover: string = !onOff ? 'button' : 'buttonNo ';

    return (
        <div>
        <button
            className={btnHover}
            onClick={onClick}
            disabled={onOff}
        >
            {nameButton}
        </button> </div>
    );
};


