import React from 'react';
import {Counter} from "./Counter/Counter";
import CounterRtk from "./CounterRTK/CounterRTK";

const App = () => {
    return (
        <div className='placeCounter'>
            <div className='appCount'>Counter v1 'on a crutch'</div>
            <Counter/>
            <div className='appCount'>Counter v2 'on ReduxTK'</div>
            <CounterRtk/>
        </div>
    );
};

export default App;