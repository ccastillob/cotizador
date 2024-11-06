import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TransactionInitialState } from '../../../infrastructure/interfaces'

const initialState: TransactionInitialState = {
  transactionType: 'PURCHASE',
  formInput: 3925,
  formOutput: "",
}

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setToggleTransaction: (state) => {
      const selectedTransaction =
        state.transactionType === 'PURCHASE' ? 'SELL' : 'PURCHASE'

      state.transactionType = selectedTransaction
    },
    setUpdateTransactionType: (state, action: PayloadAction<string>) => {
      state.transactionType = action.payload
    },
    setUpdateFormInput: (state, action: PayloadAction<number>) => {
      state.formInput = action.payload
    },
    setUpdateFormOutput: (state, action: PayloadAction<number>) => {
      state.formOutput = action.payload
    },
  },
})

export const { setUpdateTransactionType, setToggleTransaction, setUpdateFormInput, setUpdateFormOutput } = transactionSlice.actions

