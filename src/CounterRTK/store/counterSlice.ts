import {createSlice, PayloadAction} from '@reduxjs/toolkit'

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
        incrStartCount: (state, action: PayloadAction<number>) => {
            state.startCount = action.payload
            state.count=action.payload
        },
        incrMaxCount: (state, action: PayloadAction<number>) => {
            state.maxCount = action.payload
        },
    },
    extraReducers: {}
})


export const {increment, resetCount, incrStartCount, incrMaxCount} = counterSlice.actions

