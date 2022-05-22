import React from 'react';
import {Counter} from "./Counter/Counter";
import CounterReduxToolKit from "./CounterRTK/CounterRTK";

const App = () => {
    return (
        <div className='placeCounter'>
            <div className='appCount'>Counter v1 'on a crutch'</div>
            <Counter/>
            <div className='appCount'>Counter v2 'on ReduxTK'</div>
            <CounterReduxToolKit/>
        </div>
    );
};

export default App;