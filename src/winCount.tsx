import React from 'react';

type WinCountType = {
  winCount: number;
    offInc: boolean
};


const WinCount: React.FC<WinCountType> = ({winCount, offInc}) => {

    const maxCountStyle: string = (offInc ? 'red count' : 'count')

    return (
        <div className={maxCountStyle}>{winCount}</div>
    );
};

export default WinCount;