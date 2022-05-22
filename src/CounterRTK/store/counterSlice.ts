import { createSlice } from '@reduxjs/toolkit'


export type CounterState = {
    startCount: number
    maxCount: number
    count: number
}

const initialState: CounterState = {
    startCount: 0,
    maxCount: 5,
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        resetCount: (state) => {
            state.count = state.startCount
        },
        incrementByAmount: () => {

        },
    },
})

export const { increment, resetCount, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer