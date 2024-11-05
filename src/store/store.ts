import { configureStore } from '@reduxjs/toolkit'
import { transactionSlice } from './slices/transaction/transactionSlice'
import { rateSlice } from './slices/rate/rateSlice'

export const store = configureStore({
  reducer: {
    transaction: transactionSlice.reducer,
    rates: rateSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
