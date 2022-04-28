import React from 'react';

type WinCountType = {
    winCount: string;
    offInc: boolean
};

export const WinCount: React.FC<WinCountType> = ({winCount, offInc}) => {

    const maxCountStyle: string = (offInc ? 'red number' : 'number')

    return (
        <div className={maxCountStyle}>{winCount}</div>
    );
};

