import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from './counterSlice'
import {loadState, saveState} from './localStorageUtils';



export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
    preloadedState: {
       counter: loadState()
    }
})


store.subscribe(() => {
    saveState(store.getState().counter)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch