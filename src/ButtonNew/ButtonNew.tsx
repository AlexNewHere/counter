import React from 'react';


type ButtonNewType = {
    onClick: () => void;
    nameButton: string;
    onOff: boolean;
}

export const ButtonNew: React.FC<ButtonNewType> = ({onClick, nameButton, onOff}) => {

    return (<button
            className="button"
            onClick={onClick}
            disabled={onOff}
        >
            {nameButton}
        </button>
    );
};


