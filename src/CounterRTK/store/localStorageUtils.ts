import {CounterState} from './counterSlice';


export const loadState = (): CounterState | undefined => {
    const serializedState = localStorage.getItem('countState');
    if (serializedState === null)
    {
        return undefined;
    }
    return JSON.parse(serializedState);
}

export const saveState = (state: CounterState) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('countState', serializedState);
}